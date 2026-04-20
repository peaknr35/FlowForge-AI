'use client';

import { motion } from 'framer-motion';
import { GitBranch, BarChart3, Mail, FileSearch, PenTool } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const modules = [
  {
    name: 'Workflow Architect',
    icon: GitBranch,
    desc: 'Describe a process, get an importable n8n JSON blueprint in 60 seconds.',
    preview: '{ "nodes": [\n  "Webhook Trigger",\n  "Enrich Data",\n  "Add to CRM"\n] }',
    size: 'large' as const,
  },
  {
    name: 'BizPlan Builder',
    icon: BarChart3,
    desc: 'Answer 5 questions, get an investor-ready business plan.',
    preview: 'TAM: $4.2B | SAM: $840M\nInvestor Score: 7/10',
    size: 'small' as const,
  },
  {
    name: 'Outreach Engine',
    icon: Mail,
    desc: 'Input prospect data, get cold email sequences with pipeline math.',
    preview: 'Subject: "Your leads are leaking"\nReply rate: 34% | Pipeline: $4.2K',
    size: 'small' as const,
  },
  {
    name: 'Doc Analyzer',
    icon: FileSearch,
    desc: 'Paste a contract, get risk flags and negotiation scripts.',
    preview: 'Risk Score: HIGH\n3 red flags found. 68% of SaaS\ncontracts contain clause 4.2(b).',
    size: 'small' as const,
  },
  {
    name: 'Niche Copywriter',
    icon: PenTool,
    desc: 'Input your niche, get ads and landing page copy that converts.',
    preview: 'Headline A: +31% CTR\n"Get My Workflow Blueprint"',
    size: 'large' as const,
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

export function BentoGrid() {
  return (
    <section id="modules" className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[30px] md:text-[36px] font-bold text-text-primary leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Five modules. One operating system.
          </h2>
          <p className="text-text-secondary mt-3 text-lg max-w-lg">
            Each module replaces a separate SaaS tool you&apos;re paying for right now.
          </p>
        </motion.div>

        {/* Bento grid: row 1 = large + 2 small, row 2 = 2 small + large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1 */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2">
            <Card hover className="h-full p-8">
              <div className="flex items-center gap-3 mb-4">
                {(() => { const Icon = modules[0].icon; return <Icon className="w-5 h-5 text-accent" />; })()}
                <h3 className="text-xl font-semibold text-text-primary">{modules[0].name}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">{modules[0].desc}</p>
              <pre className="bg-bg-base text-accent-text text-xs font-mono p-4 rounded-lg overflow-hidden leading-relaxed">
                {modules[0].preview}
              </pre>
            </Card>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card hover className="h-full p-6">
              <div className="flex items-center gap-3 mb-3">
                {(() => { const Icon = modules[1].icon; return <Icon className="w-5 h-5 text-accent" />; })()}
                <h3 className="text-base font-semibold text-text-primary">{modules[1].name}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-3">{modules[1].desc}</p>
              <pre className="bg-bg-base text-text-tertiary text-xs font-mono p-3 rounded-lg leading-relaxed">
                {modules[1].preview}
              </pre>
            </Card>
          </motion.div>

          {/* Row 2 */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card hover className="h-full p-6">
              <div className="flex items-center gap-3 mb-3">
                {(() => { const Icon = modules[2].icon; return <Icon className="w-5 h-5 text-accent" />; })()}
                <h3 className="text-base font-semibold text-text-primary">{modules[2].name}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-3">{modules[2].desc}</p>
              <pre className="bg-bg-base text-text-tertiary text-xs font-mono p-3 rounded-lg leading-relaxed">
                {modules[2].preview}
              </pre>
            </Card>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card hover className="h-full p-6">
              <div className="flex items-center gap-3 mb-3">
                {(() => { const Icon = modules[3].icon; return <Icon className="w-5 h-5 text-accent" />; })()}
                <h3 className="text-base font-semibold text-text-primary">{modules[3].name}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-3">{modules[3].desc}</p>
              <pre className="bg-bg-base text-text-tertiary text-xs font-mono p-3 rounded-lg leading-relaxed">
                {modules[3].preview}
              </pre>
            </Card>
          </motion.div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-3">
            <Card hover className="h-full p-8">
              <div className="flex items-center gap-3 mb-4">
                {(() => { const Icon = modules[4].icon; return <Icon className="w-5 h-5 text-accent" />; })()}
                <h3 className="text-xl font-semibold text-text-primary">{modules[4].name}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">{modules[4].desc}</p>
              <pre className="bg-bg-base text-accent-text text-xs font-mono p-4 rounded-lg leading-relaxed">
                {modules[4].preview}
              </pre>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}