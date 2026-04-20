export function ProductDemoCard() {
  return (
    <div className="product-card-3d w-full max-w-[380px] bg-bg-surface border border-border-default rounded-[var(--radius-card-lg)] overflow-hidden">
      {/* macOS dots */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-subtle">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
        <span className="ml-3 text-xs text-text-tertiary font-mono">niche-copywriter</span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 text-[13px] font-mono leading-relaxed">
        <div className="text-text-secondary">
          <span className="text-accent-text">&gt;</span> Niche Copywriter
        </div>

        <div className="space-y-2 text-text-secondary">
          <p><span className="text-text-primary">Subject:</span> &ldquo;Your leads are leaking&rdquo;</p>
          <p className="text-text-tertiary">
            Hey John —<br />
            I noticed Acme Corp is spending ~10hrs/week on
            manual CRM entry. We built a workflow that
            cuts that to 45 minutes.
          </p>
          <p>15 min this week?</p>
        </div>

        <div className="border-t border-border-subtle pt-3 space-y-1">
          <p className="text-accent-text">Pipeline value: $4,200/mo</p>
          <p className="text-accent-text">FlowForge saved $1,000/mo vs Copy.ai</p>
        </div>
      </div>
    </div>
  );
}