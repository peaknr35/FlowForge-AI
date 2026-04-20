import Link from 'next/link';
import { GitBranch, BarChart3, Mail, FileSearch, PenTool } from 'lucide-react';

const modules = [
  { name: 'Workflow Architect', path: 'workflow-architect', icon: GitBranch, desc: 'Describe a process, get an importable n8n JSON blueprint in 60 seconds.' },
  { name: 'BizPlan Builder', path: 'bizplan-builder', icon: BarChart3, desc: 'Answer 5 questions, get an investor-ready business plan.' },
  { name: 'Outreach Engine', path: 'outreach-engine', icon: Mail, desc: 'Input prospect data, get cold email sequences with pipeline math.' },
  { name: 'Doc Analyzer', path: 'doc-analyzer', icon: FileSearch, desc: 'Paste a contract, get risk flags and negotiation scripts.' },
  { name: 'Niche Copywriter', path: 'niche-copywriter', icon: PenTool, desc: 'Input your niche, get conversion copy for your market.' },
];

export default function DashboardHome() {
  return (
    <div className="p-6 md:p-8 max-w-[960px]">
      <h2 className="text-2xl font-bold text-text-primary mb-1">Welcome back</h2>
      <p className="text-sm text-text-secondary mb-8">
        Pick a module to start generating. Free tier includes 3 uses per module.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.path}
              href={`/dashboard/${m.path}`}
              className="group bg-bg-surface border border-border-default rounded-[var(--radius-card)] p-6 hover:border-white/10 hover:-translate-y-0.5 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-5 h-5 text-accent" />
                <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-text transition-colors duration-150">
                  {m.name}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}