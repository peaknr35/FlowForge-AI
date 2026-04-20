import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  rows?: number;
}

export const Input = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ label, className = '', ...props }, ref) => (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-semibold text-text-primary">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`
          w-full bg-bg-base
          border border-border-default
          rounded-lg
          px-4 py-3
          text-sm text-text-primary
          placeholder:text-text-tertiary
          focus:outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/10
          transition-colors duration-150
          resize-none
          ${className}
        `}
        {...props}
      />
    </div>
  )
);

Input.displayName = 'Input';