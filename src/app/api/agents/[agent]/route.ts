import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { AGENT_CONFIG, AGENTS_BY_TIER, type AgentTier } from '@/lib/prompts';
import { callAgent } from '@/lib/claude';
import { sanitizeUserInput } from '@/lib/sanitize';

interface AgentRequestBody {
  input: string;
  context?: Record<string, unknown>;
  tierOverride?: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ agent: string }> }
) {
  const { agent: agentId } = await params;

  // Validate agent exists
  const agentConfig = AGENT_CONFIG[agentId];
  if (!agentConfig) {
    return NextResponse.json(
      { success: false, error: `Unknown agent: ${agentId}` },
      { status: 404 }
    );
  }

  // Authenticate user
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { success: false, error: 'Authentication required' },
      { status: 401 }
    );
  }

  // Check user's subscription tier
  const { data: profile } = await supabase
    .from('profiles')
    .select('plan_tier')
    .eq('id', user.id)
    .single();

  const userTier: AgentTier = (profile?.plan_tier as AgentTier) || 'free';
  const allowedAgents = AGENTS_BY_TIER[userTier];

  if (!allowedAgents.includes(agentId)) {
    return NextResponse.json(
      {
        success: false,
        error: `Agent "${agentConfig.name}" requires ${agentConfig.minTier} plan. You are on the ${userTier} plan.`,
        required: agentConfig.minTier,
        current: userTier,
      },
      { status: 403 }
    );
  }

  // Parse and validate input
  let body: AgentRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  if (!body.input || typeof body.input !== 'string') {
    return NextResponse.json(
      { success: false, error: 'Input is required' },
      { status: 400 }
    );
  }

  const sanitizedInput = sanitizeUserInput(body.input);
  if (sanitizedInput.length > 10000) {
    return NextResponse.json(
      { success: false, error: 'Input exceeds maximum length of 10,000 characters' },
      { status: 400 }
    );
  }

  // Build the prompt
  const systemPrompt = agentConfig.systemPrompt;
  const userPrompt = sanitizedInput;

  // Determine model (Ollama-first, Claude API path for future)
  const model = agentConfig.ollamaModel;
  const maxTokens = agentConfig.maxTokens;

  // Call AI
  const startTime = Date.now();
  let result: { text: string; inputTokens: number; outputTokens: number };
  try {
    result = await callAgent(systemPrompt, userPrompt, model, maxTokens);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'AI generation failed';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }

  const durationMs = Date.now() - startTime;

  // Track usage
  await supabase.from('generations').insert({
    user_id: user.id,
    module_name: `agent:${agentId}`,
    input_text: sanitizedInput,
    output_text: result.text,
    model_used: model,
    input_tokens: result.inputTokens,
    output_tokens: result.outputTokens,
    cost_usd: 0, // Ollama is free
  });

  return NextResponse.json({
    success: true,
    data: {
      agent: agentId,
      phase: agentConfig.phase,
      output: result.text,
      model,
      durationMs,
      slashCommand: agentConfig.slashCommand,
    },
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ agent: string }> }
) {
  const { agent: agentId } = await params;

  // Authenticate user
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { success: false, error: 'Authentication required' },
      { status: 401 }
    );
  }

  // Get agent info
  const agentConfig = AGENT_CONFIG[agentId];
  if (!agentConfig) {
    return NextResponse.json(
      { success: false, error: `Unknown agent: ${agentId}` },
      { status: 404 }
    );
  }

  // Check access
  const { data: profile } = await supabase
    .from('profiles')
    .select('plan_tier')
    .eq('id', user.id)
    .single();

  const userTier: AgentTier = (profile?.plan_tier as AgentTier) || 'free';
  const hasAccess = AGENTS_BY_TIER[userTier].includes(agentId);

  return NextResponse.json({
    success: true,
    data: {
      id: agentConfig.id,
      name: agentConfig.name,
      phase: agentConfig.phase,
      description: agentConfig.description,
      slashCommand: agentConfig.slashCommand,
      hasAccess,
      required: agentConfig.minTier,
      current: userTier,
    },
  });
}