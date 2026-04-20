import { createClient } from './supabase/server';

const PLAN_LIMITS: Record<string, { perModule: number; total: number }> = {
  free: { perModule: 3, total: 15 },
  starter: { perModule: 50, total: 250 },
  pro: { perModule: Infinity, total: Infinity },
  agency: { perModule: Infinity, total: Infinity },
  lifetime: { perModule: Infinity, total: Infinity },
};

export interface UsageCheck {
  allowed: boolean;
  used: number;
  limit: number;
  plan: string;
}

export async function checkUsageLimit(
  userId: string,
  moduleName: string
): Promise<UsageCheck> {
  const supabase = await createClient();

  const { data: profile } = await supabase
    .from('profiles')
    .select('plan_tier')
    .eq('id', userId)
    .single();

  const plan = profile?.plan_tier || 'free';
  const limits = PLAN_LIMITS[plan];

  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ).toISOString();

  const { count } = await supabase
    .from('generations')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('module_name', moduleName)
    .gte('created_at', startOfMonth);

  const used = count || 0;
  const allowed = used < limits.perModule;

  return { allowed, used, limit: limits.perModule, plan };
}

export async function recordGeneration(
  userId: string,
  moduleName: string,
  inputText: string,
  outputText: string,
  model: string,
  inputTokens: number,
  outputTokens: number
) {
  const supabase = await createClient();

  const costUsd = 0; // Ollama is free

  await supabase.from('generations').insert({
    user_id: userId,
    module_name: moduleName,
    input_text: inputText,
    output_text: outputText,
    model_used: model,
    input_tokens: inputTokens,
    output_tokens: outputTokens,
    cost_usd: costUsd,
  });
}