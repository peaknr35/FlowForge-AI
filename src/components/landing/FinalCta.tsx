'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function FinalCta() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center"
        >
          <h2 className="text-[30px] md:text-[36px] font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            Start replacing $1,639/mo in tools.
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            Five AI modules. One subscription. Built for solo founders who ship.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-accent text-bg-base px-8 py-3.5 rounded-lg text-sm font-semibold hover:brightness-110 hover:-translate-y-px transition-all duration-150"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-text-tertiary text-xs mt-4">
            14-day free trial · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}