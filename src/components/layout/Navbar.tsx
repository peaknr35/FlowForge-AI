import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-base font-bold text-text-primary tracking-tight">
          FlowForge
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#modules" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150">
            Modules
          </Link>
          <Link href="/#pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150">
            Pricing
          </Link>
        </div>
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 bg-accent text-bg-base text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-150"
        >
          Get Started
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </nav>
  );
}