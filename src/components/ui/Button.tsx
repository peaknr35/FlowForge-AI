import { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-bg-base hover:brightness-110 hover:-translate-y-px active:translate-y-0',
  secondary: 'bg-transparent border border-border-default text-text-primary hover:border-white/12 hover:bg-white/3',
  ghost: 'bg-transparent text-accent-text hover:opacity-80',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', loading, className = '', children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-lg
        text-sm font-semibold leading-5
        transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
      )}
      {loading ? 'Processing...' : children}
    </button>
  )
);

Button.displayName = 'Button';