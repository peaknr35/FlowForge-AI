import { ReactNode } from 'react';

type CardVariant = 'default' | 'elevated';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const cardStyles: Record<CardVariant, string> = {
  default: 'bg-bg-surface border border-border-default rounded-[var(--radius-card)]',
  elevated: 'bg-bg-surface border border-accent/20 rounded-[var(--radius-card-lg)] shadow-[0_0_40px_rgba(0,212,170,0.05)]',
};

export function Card({ variant = 'default', children, className = '', hover = false }: CardProps) {
  return (
    <div className={`
      ${cardStyles[variant]}
      p-6
      ${hover ? 'hover:border-white/10 hover:-translate-y-0.5 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}