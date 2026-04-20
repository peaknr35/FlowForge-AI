type BadgeVariant = 'teal' | 'green';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<BadgeVariant, string> = {
  teal: 'bg-accent-soft text-accent-text',
  green: 'bg-green-badge text-white',
};

export function Badge({ variant = 'teal', children, className = '' }: BadgeProps) {
  return (
    <span className={`
      inline-flex items-center
      px-2.5 py-1
      rounded-full
      text-xs font-medium leading-4 tracking-wide
      ${styles[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}