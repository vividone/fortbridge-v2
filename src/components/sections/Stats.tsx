import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  variant?: 'default' | 'card' | 'inline';
  background?: 'default' | 'secondary' | 'dark';
  className?: string;
}

export function StatsSection({
  stats,
  variant = 'default',
  background = 'default',
  className,
}: StatsSectionProps) {
  const isDark = background === 'dark';

  return (
    <section
      className={cn(
        'py-16 md:py-20',
        background === 'default' && 'bg-white',
        background === 'secondary' && 'bg-[var(--color-gray-50)]',
        background === 'dark' && 'bg-[var(--color-gray-900)]',
        className
      )}
    >
      <Container>
        {variant === 'default' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className={cn(
                    'text-4xl md:text-5xl font-bold',
                    isDark ? 'text-white' : 'text-[var(--color-primary)]'
                  )}
                >
                  {stat.value}
                </p>
                <p
                  className={cn(
                    'mt-2 font-medium',
                    isDark ? 'text-[var(--color-gray-300)]' : 'text-[var(--color-black)]'
                  )}
                >
                  {stat.label}
                </p>
                {stat.description && (
                  <p
                    className={cn(
                      'mt-1 text-sm',
                      isDark ? 'text-[var(--color-gray-500)]' : 'text-[var(--color-gray-500)]'
                    )}
                  >
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {variant === 'card' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  'p-6 rounded-2xl text-center',
                  isDark
                    ? 'bg-[var(--color-gray-800)]'
                    : 'bg-white border border-[var(--color-gray-100)]'
                )}
              >
                <p
                  className={cn(
                    'text-3xl md:text-4xl font-bold',
                    isDark ? 'text-white' : 'text-[var(--color-primary)]'
                  )}
                >
                  {stat.value}
                </p>
                <p
                  className={cn(
                    'mt-2 text-sm font-medium',
                    isDark ? 'text-[var(--color-gray-300)]' : 'text-[var(--color-black)]'
                  )}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {variant === 'inline' && (
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <p
                  className={cn(
                    'text-3xl md:text-4xl font-bold',
                    isDark ? 'text-white' : 'text-[var(--color-primary)]'
                  )}
                >
                  {stat.value}
                </p>
                <p
                  className={cn(
                    'text-sm',
                    isDark ? 'text-[var(--color-gray-400)]' : 'text-[var(--color-gray-600)]'
                  )}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

// ============================================
// STATS BAR (For use in Hero or other sections)
// ============================================

interface StatsBarProps {
  stats: Stat[];
  className?: string;
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white rounded-2xl border border-[var(--color-gray-100)] shadow-sm',
        className
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={cn(
            'text-center',
            index < stats.length - 1 && 'md:border-r md:border-[var(--color-gray-100)]'
          )}
        >
          <p className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-[var(--color-gray-600)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
