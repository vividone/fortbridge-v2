import { forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] focus-visible:ring-[var(--color-primary)]',
        secondary:
          'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)] focus-visible:ring-[var(--color-secondary)]',
        outline:
          'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus-visible:ring-[var(--color-primary)]',
        'outline-secondary':
          'border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white focus-visible:ring-[var(--color-secondary)]',
        ghost:
          'text-[var(--color-gray-700)] hover:bg-[var(--color-gray-100)] hover:text-[var(--color-black)] focus-visible:ring-[var(--color-gray-400)]',
        link:
          'text-[var(--color-primary)] underline-offset-4 hover:underline focus-visible:ring-[var(--color-primary)] p-0',
        dark:
          'bg-[var(--color-gray-900)] text-white hover:bg-[var(--color-gray-800)] focus-visible:ring-[var(--color-gray-700)]',
        white:
          'bg-white text-[var(--color-black)] hover:bg-[var(--color-gray-100)] focus-visible:ring-[var(--color-gray-400)]',
      },
      size: {
        sm: 'text-sm px-4 py-2 rounded-lg',
        md: 'text-base px-6 py-3 rounded-lg',
        lg: 'text-lg px-8 py-4 rounded-xl',
        icon: 'p-2 rounded-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      href,
      external,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(buttonVariants({ variant, size, fullWidth, className }));

    // If href is provided, render as a Link
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {leftIcon}
            {children}
            {rightIcon}
          </a>
        );
      }

      return (
        <Link href={href} className={classes}>
          {leftIcon}
          {children}
          {rightIcon}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
