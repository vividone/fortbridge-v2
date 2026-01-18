import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

// ============================================
// SECTION LABEL
// ============================================

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]',
        className
      )}
    >
      {children}
    </span>
  );
}

// ============================================
// HEADING COMPONENT
// ============================================

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  children: ReactNode;
  className?: string;
  balance?: boolean;
  gradient?: boolean;
}

const headingSizes = {
  xs: 'text-lg md:text-xl',
  sm: 'text-xl md:text-2xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl',
  xl: 'text-4xl md:text-5xl',
  '2xl': 'text-4xl md:text-5xl lg:text-6xl',
  '3xl': 'text-5xl md:text-6xl lg:text-7xl',
  '4xl': 'text-6xl md:text-7xl lg:text-8xl',
};

export function Heading({
  as: Component = 'h2',
  size = 'lg',
  children,
  className,
  balance = true,
  gradient = false,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'font-heading font-semibold text-[var(--color-black)]',
        headingSizes[size],
        balance && 'text-balance',
        gradient && 'gradient-text',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// TEXT COMPONENT
// ============================================

interface TextProps {
  as?: 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
  muted?: boolean;
  lead?: boolean;
}

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export function Text({
  as: Component = 'p',
  size = 'base',
  children,
  className,
  muted = false,
  lead = false,
}: TextProps) {
  return (
    <Component
      className={cn(
        textSizes[size],
        muted ? 'text-[var(--color-gray-500)]' : 'text-[var(--color-gray-700)]',
        lead && 'text-lg md:text-xl leading-relaxed',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// BLOCKQUOTE COMPONENT
// ============================================

interface BlockquoteProps {
  children: ReactNode;
  author?: string;
  role?: string;
  className?: string;
}

export function Blockquote({ children, author, role, className }: BlockquoteProps) {
  return (
    <figure className={cn('relative', className)}>
      <blockquote className="relative">
        <span className="absolute -top-4 -left-2 text-6xl text-[var(--color-primary-light)] font-serif">
          &ldquo;
        </span>
        <p className="text-xl md:text-2xl font-medium text-[var(--color-black)] italic pl-6">
          {children}
        </p>
      </blockquote>
      {(author || role) && (
        <figcaption className="mt-4 pl-6">
          {author && (
            <span className="font-semibold text-[var(--color-black)]">
              &mdash; {author}
            </span>
          )}
          {role && (
            <span className="text-[var(--color-gray-500)]">, {role}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

// ============================================
// LIST COMPONENT
// ============================================

interface ListProps {
  items: string[];
  variant?: 'bullet' | 'check' | 'number';
  className?: string;
}

export function List({ items, variant = 'bullet', className }: ListProps) {
  return (
    <ul className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {variant === 'bullet' && (
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2.5 flex-shrink-0" />
          )}
          {variant === 'check' && (
            <svg
              className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
          {variant === 'number' && (
            <span className="w-6 h-6 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-medium flex items-center justify-center flex-shrink-0">
              {index + 1}
            </span>
          )}
          <span className="text-[var(--color-gray-700)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ============================================
// DIVIDER COMPONENT
// ============================================

interface DividerProps {
  className?: string;
  decorative?: boolean;
}

export function Divider({ className, decorative = false }: DividerProps) {
  if (decorative) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--color-gray-200)]" />
        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--color-gray-200)]" />
      </div>
    );
  }

  return <hr className={cn('border-t border-[var(--color-gray-200)]', className)} />;
}
