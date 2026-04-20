'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { ProductDemoCard } from './ProductDemoCard';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="aurora-glow max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left — Copy (3/5) */}
          <div className="lg:col-span-3">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent-soft text-accent-text text-xs font-medium tracking-wide mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                1,200+ workflows generated this month
              </span>
            </motion.div>

            <motion.h1
              custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[48px] md:text-[60px] font-bold leading-[1.08] tracking-tight text-text-primary mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Replace $1,639/mo
              <br />
              <span className="text-accent">in tools.</span>
            </motion.h1>

            <motion.p
              custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-text-secondary leading-relaxed max-w-xl mb-8"
            >
              One subscription. Five AI modules. Built for solo founders
              who ship — workflows, business plans, cold emails,
              contract analysis, and niche copy.
            </motion.p>

            <motion.div
              custom={0.35} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-accent text-bg-base px-6 py-3 rounded-lg text-sm font-semibold hover:brightness-110 hover:-translate-y-px transition-all duration-150"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#modules"
                className="inline-flex items-center gap-2 border border-border-default text-text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:border-white/12 hover:bg-white/3 transition-all duration-150"
              >
                <Play className="w-3.5 h-3.5" />
                See How It Works
              </Link>
            </motion.div>
          </div>

          {/* Right — Product Demo Card (2/5) */}
          <motion.div
            custom={0.5} variants={fadeUp} initial="hidden" animate="visible"
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <ProductDemoCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}