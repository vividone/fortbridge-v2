import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';
import type { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children?: ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  className,
  children,
  hover = false,
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-[var(--color-gray-100)]',
        hover && 'transition-all duration-300 hover:shadow-lg hover:border-[var(--color-gray-200)] hover:-translate-y-1',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

interface LinkCardProps extends CardProps {
  href: string;
  external?: boolean;
}

export function LinkCard({
  href,
  external,
  className,
  children,
  padding = 'md',
}: LinkCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = cn(
    'block bg-white rounded-2xl border border-[var(--color-gray-100)]',
    'transition-all duration-300 hover:shadow-lg hover:border-[var(--color-gray-200)] hover:-translate-y-1',
    paddingClasses[padding],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  features,
  className,
}: FeatureCardProps) {
  return (
    <Card className={className} hover>
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--color-gray-600)] mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-[var(--color-gray-600)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

interface VentureCardProps {
  name: string;
  tagline: string;
  description: string;
  status: string;
  statusVariant?: 'success' | 'warning' | 'info';
  color: string;
  colorLight: string;
  href: string;
  metrics?: Array<{ label: string; value: string }>;
  className?: string;
}

export function VentureCard({
  name,
  tagline,
  description,
  status,
  statusVariant = 'success',
  color,
  colorLight,
  href,
  metrics,
  className,
}: VentureCardProps) {
  return (
    <LinkCard href={href} className={cn('group', className)}>
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
          style={{ backgroundColor: colorLight, color }}
        >
          {name[0]}
        </div>
        <Badge variant={statusVariant}>{status}</Badge>
      </div>

      <h3 className="text-xl font-semibold text-[var(--color-black)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
        {name}
      </h3>
      <p className="text-sm font-medium mb-3" style={{ color }}>
        {tagline}
      </p>
      <p className="text-[var(--color-gray-600)] text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="bg-[var(--color-gray-50)] rounded-lg p-3">
              <p className="text-xs text-[var(--color-gray-500)]">{metric.label}</p>
              <p className="text-sm font-semibold text-[var(--color-black)]">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center text-sm font-medium group-hover:text-[var(--color-primary)] transition-colors" style={{ color }}>
        Explore {name}
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </LinkCard>
  );
}

interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
  className?: string;
}

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <div className={cn('text-center', className)}>
      <p className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
        {value}
      </p>
      <p className="text-lg font-medium text-[var(--color-black)] mt-2">
        {label}
      </p>
      {description && (
        <p className="text-sm text-[var(--color-gray-500)] mt-1">{description}</p>
      )}
    </div>
  );
}
