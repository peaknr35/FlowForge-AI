interface SkeletonProps {
  className?: string;
  lines?: number;
}

export function Skeleton({ className = '', lines = 1 }: SkeletonProps) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`skeleton-shimmer h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'} ${className}`}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-bg-surface border border-border-default rounded-[var(--radius-card)] p-6 space-y-4">
      <div className="skeleton-shimmer h-5 w-1/3" />
      <div className="skeleton-shimmer h-4 w-2/3" />
      <div className="skeleton-shimmer h-4 w-full" />
      <div className="skeleton-shimmer h-4 w-4/5" />
    </div>
  );
}