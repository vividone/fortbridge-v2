import { cn } from '@/lib/utils';
import { Section, SectionHeader, SectionGrid } from './Section';
import { FeatureCard } from '@/components/ui';
import type { ReactNode } from 'react';

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

interface FeaturesSectionProps {
  label?: string;
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  background?: 'default' | 'secondary' | 'tertiary';
  className?: string;
}

export function FeaturesSection({
  label,
  title,
  description,
  features,
  columns = 3,
  background = 'default',
  className,
}: FeaturesSectionProps) {
  return (
    <Section background={background} className={className}>
      <SectionHeader label={label} title={title} description={description} />
      <SectionGrid columns={columns}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            features={feature.features}
          />
        ))}
      </SectionGrid>
    </Section>
  );
}

// ============================================
// ICON FEATURE LIST (Horizontal with icons)
// ============================================

interface IconFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface IconFeaturesProps {
  features: IconFeature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function IconFeatures({ features, columns = 3, className }: IconFeaturesProps) {
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-8', columnClasses[columns], className)}>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-black)] mb-1">
              {feature.title}
            </h3>
            <p className="text-sm text-[var(--color-gray-600)]">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// NUMBERED FEATURE LIST
// ============================================

interface NumberedFeature {
  title: string;
  description: string;
}

interface NumberedFeaturesProps {
  features: NumberedFeature[];
  className?: string;
}

export function NumberedFeatures({ features, className }: NumberedFeaturesProps) {
  return (
    <div className={cn('space-y-8', className)}>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-6">
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">
              {feature.title}
            </h3>
            <p className="text-[var(--color-gray-600)]">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// COMPARISON TABLE
// ============================================

interface ComparisonRow {
  feature: string;
  us: string | boolean;
  them: string | boolean;
}

interface ComparisonTableProps {
  usLabel?: string;
  themLabel?: string;
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({
  usLabel = 'Fortbridge',
  themLabel = 'Traditional',
  rows,
  className,
}: ComparisonTableProps) {
  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-[var(--color-success)]">✓</span>
      ) : (
        <span className="text-[var(--color-gray-400)]">—</span>
      );
    }
    return value;
  };

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[var(--color-gray-200)]">
            <th className="py-4 px-4 text-left text-sm font-medium text-[var(--color-gray-500)]">
              Feature
            </th>
            <th className="py-4 px-4 text-center text-sm font-medium text-[var(--color-primary)]">
              {usLabel}
            </th>
            <th className="py-4 px-4 text-center text-sm font-medium text-[var(--color-gray-500)]">
              {themLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-[var(--color-gray-100)] last:border-0"
            >
              <td className="py-4 px-4 text-[var(--color-black)]">
                {row.feature}
              </td>
              <td className="py-4 px-4 text-center font-medium">
                {renderValue(row.us)}
              </td>
              <td className="py-4 px-4 text-center text-[var(--color-gray-600)]">
                {renderValue(row.them)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
