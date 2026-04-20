'use client';

import Link from 'next/link';
import { PricingCards } from '@/components/landing/PricingCards';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const faqs = [
  { q: 'Can I switch plans?', a: 'Yes. Upgrade or downgrade anytime. Changes take effect on your next billing cycle.' },
  { q: 'What happens after the trial?', a: 'You keep your data. Downgrade to Free with 3 generations per module per month.' },
  { q: 'Is there a yearly discount?', a: '33% off on all yearly plans. Pro yearly is $399/yr instead of $588.' },
  { q: 'Do you offer refunds?', a: '14-day money-back guarantee on all paid plans. No questions asked.' },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navbar />
      <div className="pt-14">
        <PricingCards />
      </div>

      {/* FAQ */}
      <section className="max-w-[640px] mx-auto px-6 pb-20">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-5 border-b border-border-subtle">
            <h3 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}