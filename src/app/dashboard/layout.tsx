'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { GitBranch, BarChart3, Mail, FileSearch, PenTool, CreditCard, LogOut, Bot } from 'lucide-react';

const modules = [
  { name: 'Workflow Architect', path: 'workflow-architect', icon: GitBranch },
  { name: 'BizPlan Builder', path: 'bizplan-builder', icon: BarChart3 },
  { name: 'Outreach Engine', path: 'outreach-engine', icon: Mail },
  { name: 'Doc Analyzer', path: 'doc-analyzer', icon: FileSearch },
  { name: 'Niche Copywriter', path: 'niche-copywriter', icon: PenTool },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-primary flex">
      <aside className="hidden md:flex w-[240px] bg-bg-surface border-r border-border-default flex-col shrink-0">
        <div className="p-5 border-b border-border-subtle">
          <Link href="/dashboard" className="text-base font-bold text-text-primary tracking-tight">
            FlowForge
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          <Link
            href="/dashboard/agents"
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
              ${pathname === '/dashboard/agents'
                ? 'bg-accent-soft text-accent-text border border-accent/20'
                : 'text-accent-text hover:bg-bg-surface-2 hover:text-accent-text'}
            `}
          >
            <Bot className="w-4 h-4" />
            Virtual Team
          </Link>
          <div className="border-t border-border-subtle my-2" />
          {modules.map((m) => {
            const Icon = m.icon;
            const isActive = pathname === `/dashboard/${m.path}`;
            return (
              <Link
                key={m.path}
                href={`/dashboard/${m.path}`}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                  ${isActive
                    ? 'bg-accent-soft text-accent-text border border-accent/20'
                    : 'text-text-secondary hover:bg-bg-surface-2 hover:text-text-primary'}
                `}
              >
                <Icon className="w-4 h-4" />
                {m.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border-subtle space-y-0.5">
          <Link
            href="/pricing"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:bg-bg-surface-2 hover:text-text-primary transition-colors duration-150"
          >
            <CreditCard className="w-4 h-4" />
            Pricing
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-tertiary hover:text-red-400 hover:bg-bg-surface-2 transition-colors duration-150 w-full"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}