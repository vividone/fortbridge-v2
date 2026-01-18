import { forwardRef } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id || props.name;

    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={cn(
            'flex items-start gap-3 cursor-pointer group',
            props.disabled && 'cursor-not-allowed opacity-60'
          )}
        >
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className="sr-only peer"
              {...props}
            />
            <div
              className={cn(
                'w-5 h-5 rounded border-2 transition-all duration-200',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-[var(--color-primary)]',
                'peer-checked:bg-[var(--color-primary)] peer-checked:border-[var(--color-primary)]',
                error
                  ? 'border-[var(--color-error)]'
                  : 'border-[var(--color-gray-300)] group-hover:border-[var(--color-gray-400)]'
              )}
            />
            <Check className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
          </div>
          {label && (
            <span className="text-sm text-[var(--color-gray-700)]">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="mt-2 text-sm text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
