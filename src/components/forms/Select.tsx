import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, error, helperText, id, options, placeholder, ...props },
    ref
  ) => {
    const selectId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-[var(--color-black)] mb-2"
          >
            {label}
            {props.required && (
              <span className="text-[var(--color-error)] ml-1">*</span>
            )}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full px-4 py-3 rounded-lg border bg-white text-[var(--color-black)]',
              'appearance-none cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-offset-0',
              'disabled:bg-[var(--color-gray-100)] disabled:cursor-not-allowed',
              'transition-colors duration-200',
              error
                ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error-light)]'
                : 'border-[var(--color-gray-200)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary-light)]',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-gray-500)] pointer-events-none" />
        </div>
        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-2 text-sm text-[var(--color-error)]"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={`${selectId}-helper`}
            className="mt-2 text-sm text-[var(--color-gray-500)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
