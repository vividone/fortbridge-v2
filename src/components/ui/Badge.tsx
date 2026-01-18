import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-[var(--color-gray-100)] text-[var(--color-gray-700)]',
        primary: 'bg-[var(--color-primary-light)] text-[var(--color-primary)]',
        secondary: 'bg-[var(--color-secondary-light)] text-[var(--color-secondary)]',
        success: 'bg-[var(--color-success-light)] text-[var(--color-success)]',
        warning: 'bg-[var(--color-warning-light)] text-[var(--color-warning)]',
        error: 'bg-[var(--color-error-light)] text-[var(--color-error)]',
        info: 'bg-[var(--color-info-light)] text-[var(--color-info)]',
        accura: 'bg-[var(--color-accura-light)] text-[var(--color-accura)]',
        bakr: 'bg-[var(--color-bakr-light)] text-[var(--color-bakr)]',
        valid8: 'bg-[var(--color-valid8-light)] text-[var(--color-valid8)]',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-xs px-3 py-1',
        lg: 'text-sm px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({
  className,
  variant,
  size,
  dot,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
      )}
      {children}
    </span>
  );
}
