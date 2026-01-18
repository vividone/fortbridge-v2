import { cn } from '@/lib/utils';
import type { BaseProps } from '@/types';

interface ContainerProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  as?: 'div' | 'section' | 'article' | 'main';
}

const sizeClasses = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]',
  '2xl': 'max-w-[1440px]',
  full: 'max-w-full',
};

export function Container({
  children,
  className,
  size = '2xl',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
