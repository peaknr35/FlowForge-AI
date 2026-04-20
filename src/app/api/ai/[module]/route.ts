import { createClient } from '@/lib/supabase/server';
import { callAI } from '@/lib/claude';
import { checkUsageLimit, recordGeneration } from '@/lib/usage';
import { MODULE_CONFIG } from '@/lib/prompts';
import { apiRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';
import { sanitizeModuleName, sanitizeModelName, sanitizeUserInput } from '@/lib/sanitize';
import { NextRequest, NextResponse } from 'next/server';

const MAX_REQUEST_SIZE = 100_000; // 100KB

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ module: string }> }
) {
  if (apiRateLimit(req)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429, headers: getRateLimitHeaders(req, 30) }
    );
  }

  try {
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > MAX_REQUEST_SIZE) {
      return NextResponse.json(
        { error: 'Request too large. Maximum size is 100KB.' },
        { status: 413 }
      );
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { module: moduleName } = await params;
    const sanitizedModule = sanitizeModuleName(moduleName);
    if (!sanitizedModule) {
      return NextResponse.json({ error: 'Invalid module' }, { status: 400 });
    }

    const usage = await checkUsageLimit(user.id, sanitizedModule);
    if (!usage.allowed) {
      return NextResponse.json(
        {
          error: 'LIMIT_REACHED',
          message: `You've used ${usage.used}/${usage.limit} generations this month. Please upgrade.`,
          upgradeUrl: '/pricing',
          currentPlan: usage.plan,
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const input = sanitizeUserInput(body.input);
    const overrideModel = sanitizeModelName(body.model);

    if (!input) {
      return NextResponse.json(
        { error: 'Input too short. Please provide at least 10 characters.' },
        { status: 400 }
      );
    }

    const result = await callAI(sanitizedModule, input, overrideModel || undefined);

    await recordGeneration(
      user.id,
      sanitizedModule,
      input,
      result.text,
      result.model,
      result.inputTokens,
      result.outputTokens
    );

    return NextResponse.json(
      {
        result: result.text,
        usage: {
          used: usage.used + 1,
          limit: usage.limit,
          plan: usage.plan,
        },
        tokens: {
          input: result.inputTokens,
          output: result.outputTokens,
        },
      },
      { headers: getRateLimitHeaders(req, 30) }
    );
  } catch (error) {
    console.error('[AI_API_ERROR]', error);
    return NextResponse.json(
      { error: 'Generation failed. Please try again.' },
      { status: 500 }
    );
  }
}