'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const competitors = [
  { name: 'Jasper', price: 69 },
  { name: 'Copy.ai', price: 1000 },
  { name: 'Zapier', price: 50 },
  { name: 'LivePlan', price: 20 },
  { name: 'Ironclad', price: 500 },
];

export function SavingsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="bg-bg-surface border border-border-default rounded-[var(--radius-card-lg)] p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <div className="font-mono text-[60px] md:text-[72px] font-extrabold leading-none text-text-primary tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              {inView ? (
                <>
                  $<CountUp end={1540} duration={2} separator="," easingFn={(t: number, b: number, c: number, d: number) => -c * Math.pow(2, 10 * (t / d - 1)) + b + c} />
                </>
              ) : (
                '$0'
              )}
            </div>
            <p className="text-lg text-text-secondary mt-2">saved every month</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {competitors.map((c) => (
              <div
                key={c.name}
                className="bg-bg-base border border-border-subtle rounded-lg p-4 text-center"
              >
                <p className="text-sm text-text-tertiary mb-1">{c.name}</p>
                <p className="text-lg font-semibold text-text-primary font-mono">${c.price}</p>
                <p className="text-xs text-text-tertiary">/mo</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-text-tertiary">Total competitor cost:</span>
            <span className="font-mono font-semibold text-text-primary">$1,639/mo</span>
            <span className="text-text-tertiary hidden md:inline">|</span>
            <span className="text-text-tertiary">FlowForge:</span>
            <span className="font-mono font-semibold text-accent-text">$99/mo</span>
            <span className="text-text-tertiary hidden md:inline">|</span>
            <span className="text-text-tertiary">You save:</span>
            <span className="font-mono font-bold text-accent-text">$1,540/mo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}