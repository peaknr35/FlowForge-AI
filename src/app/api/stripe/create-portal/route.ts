import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { apiRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';
import { sanitizeString } from '@/lib/sanitize';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
});

export async function POST(req: NextRequest) {
  if (apiRateLimit(req)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429, headers: getRateLimitHeaders(req, 30) }
    );
  }

  try {
    const body = await req.json();
    const customerId = sanitizeString(body.customerId, 128);

    if (!customerId) {
      return NextResponse.json(
        { error: 'Missing customerId' },
        { status: 400 }
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    });

    return NextResponse.json(
      { url: session.url },
      { headers: getRateLimitHeaders(req, 30) }
    );
  } catch (error) {
    console.error('[STRIPE_PORTAL_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to create portal session' },
      { status: 500 }
    );
  }
}