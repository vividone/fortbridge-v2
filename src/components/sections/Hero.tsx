'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import type { ReactNode } from 'react';

interface HeroProps {
  label?: string;
  headline: string;
  subheadline?: string;
  supportingText?: string;
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
  tertiaryCTA?: {
    label: string;
    href: string;
  };
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  children?: ReactNode;
  variant?: 'default' | 'centered' | 'split';
  background?: 'default' | 'gradient' | 'dark';
  className?: string;
}

const backgroundClasses = {
  default: 'bg-white',
  gradient: 'gradient-bg-subtle',
  dark: 'bg-[var(--color-gray-900)] text-white',
};

export function Hero({
  label,
  headline,
  subheadline,
  supportingText,
  primaryCTA,
  secondaryCTA,
  tertiaryCTA,
  metrics,
  children,
  variant = 'default',
  background = 'default',
  className,
}: HeroProps) {
  const isDark = background === 'dark';

  return (
    <section
      className={cn(
        'relative min-h-[80vh] flex items-center pt-32',
        backgroundClasses[background],
        className
      )}
    >
      {/* Background decoration */}
      {background === 'default' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[var(--color-primary-light)] opacity-30 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary-light)] opacity-30 blur-3xl" />
        </div>
      )}

      <Container className="relative z-10">
        <div
          className={cn(
            'max-w-4xl',
            variant === 'centered' && 'mx-auto text-center'
          )}
        >
          {/* Label */}
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                'inline-block text-xs font-semibold uppercase tracking-widest mb-6',
                isDark ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'
              )}
            >
              {label}
            </motion.span>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-balance',
              isDark ? 'text-white' : 'text-[var(--color-black)]'
            )}
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                'mt-6 text-lg md:text-xl max-w-2xl text-balance',
                isDark ? 'text-[var(--color-gray-300)]' : 'text-[var(--color-gray-600)]',
                variant === 'centered' && 'mx-auto'
              )}
            >
              {subheadline}
            </motion.p>
          )}

          {/* Supporting Text */}
          {supportingText && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={cn(
                'mt-4 text-sm font-medium',
                isDark ? 'text-[var(--color-gray-400)]' : 'text-[var(--color-gray-500)]'
              )}
            >
              {supportingText}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA || tertiaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={cn(
                'mt-8 flex flex-wrap gap-4',
                variant === 'centered' && 'justify-center'
              )}
            >
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  external={primaryCTA.external}
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
                  variant={isDark ? 'white' : 'outline'}
                  size="lg"
                >
                  {secondaryCTA.label}
                </Button>
              )}
              {tertiaryCTA && (
                <Button
                  href={tertiaryCTA.href}
                  variant="link"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {tertiaryCTA.label}
                </Button>
              )}
            </motion.div>
          )}

          {/* Custom Content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Metrics Bar */}
        {metrics && metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={cn(
              'mt-16 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-8',
              isDark ? 'border-[var(--color-gray-700)]' : 'border-[var(--color-gray-200)]'
            )}
          >
            {metrics.map((metric, index) => (
              <div key={index} className="text-center md:text-left">
                <p
                  className={cn(
                    'text-3xl md:text-4xl font-bold',
                    isDark ? 'text-white' : 'text-[var(--color-primary)]'
                  )}
                >
                  {metric.value}
                </p>
                <p
                  className={cn(
                    'mt-1 text-sm',
                    isDark ? 'text-[var(--color-gray-400)]' : 'text-[var(--color-gray-600)]'
                  )}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}

// ============================================
// PAGE HERO (Simpler variant for inner pages)
// ============================================

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  className?: string;
}

export function PageHero({
  label,
  title,
  description,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--color-gray-50)]',
        className
      )}
    >
      <Container>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-[var(--color-gray-400)]">/</span>
                  )}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="text-[var(--color-gray-600)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-[var(--color-black)] font-medium">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Label */}
        {label && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
            {label}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--color-black)] text-balance max-w-3xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-lg text-[var(--color-gray-600)] max-w-2xl text-balance">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
