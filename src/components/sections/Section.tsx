import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'default' | 'secondary' | 'tertiary' | 'gradient' | 'dark';
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  container?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const backgroundClasses = {
  default: 'bg-white',
  secondary: 'bg-[var(--color-gray-50)]',
  tertiary: 'bg-[var(--color-gray-100)]',
  gradient: 'gradient-bg-subtle',
  dark: 'bg-[var(--color-gray-900)] text-white',
};

const spacingClasses = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-32',
};

export function Section({
  id,
  className,
  children,
  background = 'default',
  spacing = 'lg',
  container = true,
  containerSize = '2xl',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      {container ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

// ============================================
// SECTION HEADER
// ============================================

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-[var(--color-black)] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--color-gray-600)] text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

// ============================================
// SECTION GRID
// ============================================

interface SectionGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

const gapClasses = {
  sm: 'gap-4 md:gap-6',
  md: 'gap-6 md:gap-8',
  lg: 'gap-8 md:gap-10',
};

export function SectionGrid({
  children,
  columns = 3,
  gap = 'md',
  className,
}: SectionGridProps) {
  return (
    <div className={cn('grid', columnClasses[columns], gapClasses[gap], className)}>
      {children}
    </div>
  );
}

// ============================================
// SPLIT SECTION
// ============================================

interface SplitSectionProps {
  children: ReactNode;
  reversed?: boolean;
  className?: string;
}

export function SplitSection({
  children,
  reversed = false,
  className,
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
        reversed && 'lg:[&>*:first-child]:order-2',
        className
      )}
    >
      {children}
    </div>
  );
}
