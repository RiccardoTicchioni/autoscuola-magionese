import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
        const variants = {
            default: 'bg-gray-100 text-gray-700',
            primary: 'bg-primary-100 text-primary-700',
            secondary: 'bg-secondary-100 text-secondary-700',
            success: 'bg-success-100 text-success-700',
            warning: 'bg-warning-100 text-warning-700',
            error: 'bg-error-100 text-error-700',
            outline: 'bg-transparent border-2 border-gray-300 text-gray-600',
        };

        const sizes = {
            sm: 'px-2 py-0.5 text-xs',
            md: 'px-2.5 py-1 text-xs',
            lg: 'px-3 py-1.5 text-sm',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center font-medium rounded-full',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export { Badge };
