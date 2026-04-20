'use client';

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">FlowForge AI Setup Guide</h1>

      {/* Step 1: Google OAuth */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-400">1. Google OAuth — DONE</h2>
        <div className="space-y-2 text-zinc-300 text-sm">
          <p>Google OAuth is enabled and configured in Supabase.</p>
          <p>Client ID: <code className="bg-zinc-800 px-2 py-0.5 rounded">16111567413-oml6vk9liln0jub2ghhph6knf01ejlqi.apps.googleusercontent.com</code></p>
          <p>Redirect URI: <code className="bg-zinc-800 px-2 py-0.5 rounded">https://mqrkcgivlgphfmriemmg.supabase.co/auth/v1/callback</code></p>
        </div>
      </section>

      {/* Step 2: Stripe Webhook */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-400">2. Stripe Webhook — DONE</h2>
        <div className="space-y-4 text-zinc-300">
          <p className="text-sm">A permanent Stripe webhook endpoint is configured via a Supabase Edge Function. No CLI needed.</p>
          <p className="text-sm"><strong className="text-white">Webhook URL:</strong> <code className="bg-zinc-800 px-2 py-0.5 rounded block mt-1">https://mqrkcgivlgphfmriemmg.supabase.co/functions/v1/stripe-webhook</code></p>
          <p className="text-sm"><strong className="text-white">Events:</strong> checkout.session.completed, customer.subscription.updated, customer.subscription.created, customer.subscription.deleted</p>

          <p className="mt-4"><strong className="text-white">For local development (optional):</strong></p>
          <ol className="ml-4 space-y-2 text-sm">
            <li>Run: <code className="bg-zinc-800 px-2 py-0.5 rounded block mt-1">/tmp/stripe_cli/stripe.exe listen --forward-to http://localhost:3000/api/stripe/webhook</code></li>
            <li>The local CLI webhook secret is in <code className="bg-zinc-800 px-2 py-0.5 rounded">.env.local</code> as <code className="bg-zinc-800 px-2 py-0.5 rounded">STRIPE_WEBHOOK_SECRET</code></li>
          </ol>
        </div>
      </section>

      {/* Step 3: Test */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-accent-text">3. Test the full flow</h2>
        <ol className="space-y-2 text-zinc-300 text-sm">
          <li>Start dev server: <code className="bg-zinc-800 px-2 py-0.5 rounded">npx next dev --webpack</code></li>
          <li>Visit <a href="http://localhost:3000" className="text-accent-text underline">http://localhost:3000</a></li>
          <li>Click <strong className="text-white">Get Started Free</strong> → sign in with Google</li>
          <li>You should land on the dashboard</li>
          <li>Pick a module (e.g., Niche Copywriter) and generate something</li>
          <li>Verify the result appears and usage counter increments</li>
          <li>After 3 free generations, you should see the upgrade prompt</li>
        </ol>
      </section>

      <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
        <p className="text-green-400 font-medium">Setup complete! Google OAuth and Stripe webhooks are configured. Run step 3 to verify everything works.</p>
      </div>
    </div>
  );
}