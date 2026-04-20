import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { apiRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';
import { sanitizeString } from '@/lib/sanitize';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
});

const PRICE_IDS = {
  starter_weekly: process.env.STRIPE_STARTER_WEEKLY_PRICE_ID!,
  starter_monthly: process.env.STRIPE_STARTER_MONTHLY_PRICE_ID!,
  pro_monthly: process.env.STRIPE_PRO_MONTHLY_PRICE_ID!,
  pro_yearly: process.env.STRIPE_PRO_YEARLY_PRICE_ID!,
  agency_monthly: process.env.STRIPE_AGENCY_MONTHLY_PRICE_ID!,
  agency_yearly: process.env.STRIPE_AGENCY_YEARLY_PRICE_ID!,
  lifetime: process.env.STRIPE_LIFETIME_PRICE_ID!,
} as const;

type PlanKey = keyof typeof PRICE_IDS;

const VALID_PLAN_KEYS = new Set<string>(Object.keys(PRICE_IDS));
const VALID_PRICE_IDS = new Set<string>(Object.values(PRICE_IDS).filter(Boolean));

export async function POST(req: NextRequest) {
  if (apiRateLimit(req)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429, headers: getRateLimitHeaders(req, 30) }
    );
  }

  try {
    const body = await req.json();
    const rawPriceId = sanitizeString(body.priceId, 128);
    const rawUserId = sanitizeString(body.userId, 128);
    const rawPlan = sanitizeString(body.plan, 64);

    if (!rawUserId) {
      return NextResponse.json(
        { error: 'Missing userId' },
        { status: 400 }
      );
    }

    const resolvedPriceId = rawPriceId || (rawPlan && PRICE_IDS[rawPlan as PlanKey]);

    if (!resolvedPriceId || !VALID_PRICE_IDS.has(resolvedPriceId)) {
      return NextResponse.json(
        { error: 'Invalid priceId or plan' },
        { status: 400 }
      );
    }

    const isLifetime = resolvedPriceId === PRICE_IDS.lifetime;

    const session = await stripe.checkout.sessions.create({
      mode: isLifetime ? 'payment' : 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: resolvedPriceId, quantity: 1 }],
      client_reference_id: rawUserId,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
      metadata: {
        plan_tier: isLifetime ? 'lifetime' : (rawPlan || '').split('_')[0],
      },
    });

    return NextResponse.json(
      { url: session.url },
      { headers: getRateLimitHeaders(req, 30) }
    );
  } catch (error) {
    console.error('[STRIPE_CHECKOUT_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}