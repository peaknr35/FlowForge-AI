import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
});

const PRICE_TO_PLAN: Record<string, string> = {
  [process.env.STRIPE_STARTER_WEEKLY_PRICE_ID || '']: 'starter',
  [process.env.STRIPE_STARTER_MONTHLY_PRICE_ID || '']: 'starter',
  [process.env.STRIPE_PRO_MONTHLY_PRICE_ID || '']: 'pro',
  [process.env.STRIPE_PRO_YEARLY_PRICE_ID || '']: 'pro',
  [process.env.STRIPE_AGENCY_MONTHLY_PRICE_ID || '']: 'agency',
  [process.env.STRIPE_AGENCY_YEARLY_PRICE_ID || '']: 'agency',
  [process.env.STRIPE_LIFETIME_PRICE_ID || '']: 'lifetime',
};

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  const secrets = [
    process.env.STRIPE_WEBHOOK_SECRET_PROD,
    process.env.STRIPE_WEBHOOK_SECRET,
  ].filter(Boolean) as string[];

  let verified = false;
  for (const secret of secrets) {
    try {
      event = stripe.webhooks.constructEvent(body, signature, secret);
      verified = true;
      break;
    } catch {
      continue;
    }
  }

  if (!verified) {
    console.error('Webhook signature verification failed for all secrets.');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = await createClient();

  switch (event!.type) {
    case 'checkout.session.completed': {
      const session = event!.data.object as Stripe.Checkout.Session;
      const customerId = session.customer as string;
      const userId = session.client_reference_id;

      if (userId && typeof userId === 'string' && userId.length <= 128) {
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        const priceId = lineItems.data[0]?.price?.id;
        const planTier = (PRICE_TO_PLAN[priceId || ''] || 'pro') as string;

        await supabase
          .from('profiles')
          .update({
            stripe_customer_id: customerId,
            plan_tier: planTier,
          })
          .eq('id', userId);

        if (planTier === 'lifetime') {
          await supabase.from('subscriptions').insert({
            user_id: userId,
            stripe_subscription_id: `lifetime_${customerId}`,
            stripe_price_id: priceId,
            status: 'active',
          });
        }
      }
      break;
    }

    case 'customer.subscription.updated':
    case 'customer.subscription.created': {
      const subscription = event!.data.object as Stripe.Subscription;
      const priceId = subscription.items.data[0]?.price?.id;
      const planTier = PRICE_TO_PLAN[priceId || ''] || 'pro';

      await supabase
        .from('profiles')
        .update({ plan_tier: planTier })
        .eq('stripe_customer_id', subscription.customer as string);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event!.data.object as Stripe.Subscription;
      await supabase
        .from('profiles')
        .update({ plan_tier: 'free' })
        .eq('stripe_customer_id', subscription.customer as string);

      await supabase
        .from('subscriptions')
        .update({ status: 'canceled' })
        .eq('stripe_subscription_id', subscription.id);
      break;
    }
  }

  return NextResponse.json({ received: true });
}