import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';
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

  // Authenticate user — verify they own the customer ID
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const rawCustomerId = sanitizeString(body.customerId, 128);

    if (!rawCustomerId) {
      return NextResponse.json(
        { error: 'Missing customerId' },
        { status: 400 }
      );
    }

    // Verify the authenticated user owns this Stripe customer ID
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    if (profile?.stripe_customer_id !== rawCustomerId) {
      return NextResponse.json(
        { error: 'Customer ID does not match authenticated user' },
        { status: 403 }
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: rawCustomerId,
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