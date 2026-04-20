import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { AGENT_CONFIG, AGENTS_BY_TIER, type AgentTier } from '@/lib/prompts';

export async function GET(request: NextRequest) {
  // Authenticate user
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { success: false, error: 'Authentication required' },
      { status: 401 }
    );
  }

  // Get user's tier
  const { data: profile } = await supabase
    .from('profiles')
    .select('plan_tier')
    .eq('id', user.id)
    .single();

  const userTier: AgentTier = (profile?.plan_tier as AgentTier) || 'free';
  const allowedAgents = AGENTS_BY_TIER[userTier];

  // Build agent list with access status
  const agents = Object.values(AGENT_CONFIG).map((agent) => ({
    id: agent.id,
    name: agent.name,
    phase: agent.phase,
    description: agent.description,
    slashCommand: agent.slashCommand,
    hasAccess: allowedAgents.includes(agent.id),
    required: agent.minTier,
    current: userTier,
  }));

  // Group by phase
  const phases = ['plan', 'build', 'qa', 'ship', 'monitor'] as const;
  const grouped = phases.map((phase) => ({
    phase,
    agents: agents.filter((a) => a.phase === phase),
  }));

  return NextResponse.json({
    success: true,
    data: {
      tier: userTier,
      totalAgents: agents.length,
      accessibleAgents: allowedAgents.length,
      phases: grouped,
    },
  });
}