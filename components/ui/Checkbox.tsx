import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string | React.ReactNode;
    error?: string;
    helperText?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, error, helperText, id, ...props }, ref) => {
        const checkboxId = id || React.useId();

        return (
            <div className="w-full">
                <label htmlFor={checkboxId} className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-0.5">
                        <input
                            id={checkboxId}
                            type="checkbox"
                            className={cn(
                                `
                w-5 h-5 rounded-md border-2 border-gray-300
                text-primary-600 bg-white
                transition-all duration-200
                focus:ring-2 focus:ring-primary-500/20 focus:ring-offset-0
                hover:border-primary-400
                checked:border-primary-600 checked:bg-primary-600
                disabled:opacity-50 disabled:cursor-not-allowed
                cursor-pointer
                `,
                                error && 'border-error-500',
                                className
                            )}
                            ref={ref}
                            aria-invalid={error ? 'true' : 'false'}
                            aria-describedby={error ? `${checkboxId}-error` : helperText ? `${checkboxId}-helper` : undefined}
                            {...props}
                        />
                    </div>
                    {label && (
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors select-none">
                            {label}
                        </span>
                    )}
                </label>
                {error && (
                    <p id={`${checkboxId}-error`} className="mt-1.5 text-sm text-error-600 flex items-center gap-1 ml-8">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p id={`${checkboxId}-helper`} className="mt-1.5 text-sm text-gray-500 ml-8">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
