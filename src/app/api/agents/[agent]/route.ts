import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { AGENT_CONFIG, AGENTS_BY_TIER, type AgentTier } from '@/lib/prompts';
import { callAgent } from '@/lib/claude';
import { sanitizeUserInput } from '@/lib/sanitize';
import { apiRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

const MAX_REQUEST_SIZE = 102400; // 100KB

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ agent: string }> }
) {
  // Rate limit check
  if (apiRateLimit(request)) {
    return NextResponse.json(
      { success: false, error: 'Rate limit exceeded. Please try again later.' },
      { status: 429, headers: getRateLimitHeaders(request, 30) }
    );
  }

  // Request size check
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_REQUEST_SIZE) {
    return NextResponse.json(
      { success: false, error: 'Request too large' },
      { status: 413 }
    );
  }

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

  // Parse and validate input — only accept the 'input' field
  let body: { input: string };
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
  if (!sanitizedInput) {
    return NextResponse.json(
      { success: false, error: 'Input is too short (minimum 10 characters)' },
      { status: 400 }
    );
  }
  if (sanitizedInput.length > 10000) {
    return NextResponse.json(
      { success: false, error: 'Input exceeds maximum length of 10,000 characters' },
      { status: 400 }
    );
  }

  // Call AI
  const startTime = Date.now();
  let result: { text: string; inputTokens: number; outputTokens: number };
  try {
    result = await callAgent(agentConfig.systemPrompt, sanitizedInput, agentConfig.ollamaModel, agentConfig.maxTokens);
  } catch {
    return NextResponse.json(
      { success: false, error: 'AI generation failed. Please try again.' },
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
    model_used: agentConfig.ollamaModel,
    input_tokens: result.inputTokens,
    output_tokens: result.outputTokens,
    cost_usd: 0,
  });

  return NextResponse.json({
    success: true,
    data: {
      agent: agentId,
      phase: agentConfig.phase,
      output: result.text,
      model: agentConfig.ollamaModel,
      durationMs,
      slashCommand: agentConfig.slashCommand,
    },
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ agent: string }> }
) {
  // Rate limit check
  if (apiRateLimit(request)) {
    return NextResponse.json(
      { success: false, error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }

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