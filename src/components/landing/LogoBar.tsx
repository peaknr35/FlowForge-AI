'use client';

import { motion } from 'framer-motion';

const tools = ['Jasper', 'Copy.ai', 'Zapier', 'LivePlan', 'Ironclad'];

export function LogoBar() {
  return (
    <section className="py-12 border-y border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xs text-text-tertiary uppercase tracking-widest">
            Tools they paid for separately
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {tools.map((tool) => (
              <span key={tool} className="text-lg font-semibold text-text-tertiary/40 tracking-tight">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}