import { NextRequest, NextResponse } from 'next/server';
import { apiRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

export async function GET(req: NextRequest) {
  if (apiRateLimit(req)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429, headers: getRateLimitHeaders(req, 30) }
    );
  }

  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/v1/models`);
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Ollama not running' },
        { status: 503 }
      );
    }
    const data = await response.json();
    const models = data.data?.map((m: { id: string }) => m.id) || [];
    return NextResponse.json(
      { models },
      { headers: getRateLimitHeaders(req, 30) }
    );
  } catch {
    return NextResponse.json(
      { error: 'Cannot connect to Ollama. Is it running?' },
      { status: 503 }
    );
  }
}