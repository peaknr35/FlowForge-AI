'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 49,
    weeklyPrice: 19,
    yearlyPrice: null,
    period: '/mo',
    altPeriod: '/week',
    isWeekly: true,
    features: ['3 modules (choose any)', '50 generations/module/mo', 'Email support'],
    cta: 'Start Free Trial',
    elevated: false,
    badge: null as string | null,
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 399,
    period: '/mo',
    features: ['All 5 modules', 'Unlimited generations', 'Priority support', 'Generation history'],
    cta: 'Start Free Trial',
    elevated: true,
    badge: 'Most Popular' as string | null,
  },
  {
    name: 'Agency',
    monthlyPrice: 99,
    yearlyPrice: 799,
    period: '/mo',
    features: ['Everything in Pro', '5 team seats', 'White-label', 'API access', 'Dedicated support'],
    cta: 'Start Free Trial',
    elevated: false,
    badge: null as string | null,
  },
  {
    name: 'Lifetime',
    monthlyPrice: 499,
    yearlyPrice: null,
    period: '',
    isOneTime: true,
    features: ['All 5 modules forever', 'Unlimited generations', 'All future updates', 'Priority support', 'No recurring fees'],
    cta: 'Get Lifetime Access',
    elevated: false,
    badge: 'Best Value' as string | null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

export function PricingCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[30px] md:text-[36px] font-bold text-text-primary" style={{ letterSpacing: '-0.02em' }}>
            Simple pricing. No surprises.
          </h2>
          <p className="text-text-secondary mt-3">
            Start free, upgrade when you need more. 14-day free trial on all plans.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-6 bg-bg-surface border border-border-default rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                !yearly ? 'bg-accent text-bg-base' : 'text-text-secondary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                yearly ? 'bg-accent text-bg-base' : 'text-text-secondary'
              }`}
            >
              Yearly <span className="text-xs">-33%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => {
            const displayPrice = plan.isOneTime
              ? plan.monthlyPrice
              : plan.isWeekly
                ? (yearly ? plan.monthlyPrice : plan.weeklyPrice)
                : (yearly && plan.yearlyPrice ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice);

            return (
              <motion.div
                key={plan.name}
                custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`
                  relative p-6 rounded-[var(--radius-card-lg)] border
                  ${plan.elevated
                    ? 'bg-bg-surface border-accent/20 shadow-[0_0_40px_rgba(0,212,170,0.05)]'
                    : 'bg-bg-surface border-border-default'}
                `}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant={plan.badge === 'Best Value' ? 'green' : 'teal'}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <h3 className="text-base font-semibold text-text-primary">{plan.name}</h3>

                <div className="mt-4 mb-1">
                  <span className="text-[36px] font-bold text-text-primary font-mono leading-none">
                    ${displayPrice}
                  </span>
                  {plan.isOneTime ? (
                    <span className="text-text-tertiary text-sm ml-1">one-time</span>
                  ) : (
                    <span className="text-text-tertiary text-sm ml-1">
                      {plan.isWeekly && !yearly ? '/week' : '/mo'}
                    </span>
                  )}
                </div>

                {yearly && plan.yearlyPrice && !plan.isOneTime && (
                  <p className="text-xs text-accent-text mb-4">
                    ${plan.yearlyPrice}/year — save ${plan.monthlyPrice * 12 - plan.yearlyPrice}
                  </p>
                )}
                {plan.isWeekly && !yearly && (
                  <p className="text-xs text-text-tertiary mb-4">or $49/month</p>
                )}
                {!yearly && !plan.yearlyPrice && !plan.isWeekly && !plan.isOneTime && (
                  <div className="h-4 mb-4" />
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/login"
                  className={`
                    block text-center py-3 rounded-lg text-sm font-semibold transition-all duration-150
                    ${plan.elevated
                      ? 'bg-accent text-bg-base hover:brightness-110'
                      : 'border border-border-default text-text-primary hover:border-white/12 hover:bg-white/3'}
                  `}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-text-tertiary text-xs mt-8">
          All subscription plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}