import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import type { ReactNode } from 'react';

interface CTASectionProps {
  label?: string;
  headline: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  variant?: 'default' | 'dark' | 'gradient';
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

export function CTASection({
  label,
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  align = 'center',
  className,
  children,
}: CTASectionProps) {
  const isDark = variant === 'dark';
  const isGradient = variant === 'gradient';

  return (
    <section
      className={cn(
        'py-20 md:py-28',
        isDark && 'bg-[var(--color-gray-900)]',
        isGradient && 'gradient-bg',
        !isDark && !isGradient && 'bg-[var(--color-gray-50)]',
        className
      )}
    >
      <Container>
        <div
          className={cn(
            'max-w-3xl',
            align === 'center' && 'mx-auto text-center'
          )}
        >
          {label && (
            <span
              className={cn(
                'inline-block text-xs font-semibold uppercase tracking-widest mb-4',
                isDark || isGradient
                  ? 'text-[var(--color-primary-light)]'
                  : 'text-[var(--color-primary)]'
              )}
            >
              {label}
            </span>
          )}

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-balance',
              isDark || isGradient ? 'text-white' : 'text-[var(--color-black)]'
            )}
          >
            {headline}
          </h2>

          {description && (
            <p
              className={cn(
                'mt-4 text-lg text-balance',
                isDark || isGradient
                  ? 'text-[var(--color-gray-300)]'
                  : 'text-[var(--color-gray-600)]'
              )}
            >
              {description}
            </p>
          )}

          {children && <div className="mt-6">{children}</div>}

          {(primaryCTA || secondaryCTA) && (
            <div
              className={cn(
                'mt-8 flex flex-wrap gap-4',
                align === 'center' && 'justify-center'
              )}
            >
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  external={primaryCTA.external}
                  variant={isDark || isGradient ? 'white' : 'primary'}
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  external={secondaryCTA.external}
                  variant={isDark || isGradient ? 'outline-secondary' : 'outline'}
                  size="lg"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

// ============================================
// INLINE CTA (For use within other sections)
// ============================================

interface InlineCTAProps {
  headline: string;
  description?: string;
  cta: {
    label: string;
    href: string;
    external?: boolean;
  };
  variant?: 'default' | 'bordered' | 'filled';
  className?: string;
}

export function InlineCTA({
  headline,
  description,
  cta,
  variant = 'default',
  className,
}: InlineCTAProps) {
  return (
    <div
      className={cn(
        'p-8 rounded-2xl',
        variant === 'default' && 'bg-[var(--color-gray-50)]',
        variant === 'bordered' && 'border-2 border-[var(--color-gray-200)]',
        variant === 'filled' && 'bg-[var(--color-primary-light)]',
        className
      )}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-black)]">
        {headline}
      </h3>
      {description && (
        <p className="mt-2 text-[var(--color-gray-600)]">{description}</p>
      )}
      <Button
        href={cta.href}
        external={cta.external}
        className="mt-4"
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        {cta.label}
      </Button>
    </div>
  );
}
