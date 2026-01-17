import * as React from 'react';
import { cn } from '@/lib/utils';

interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
    };

    return (
        <svg
            className={cn('animate-spin text-primary-500', sizes[size], className)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );
}

interface LoadingOverlayProps {
    isLoading: boolean;
    text?: string;
    children: React.ReactNode;
}

export function LoadingOverlay({ isLoading, text, children }: LoadingOverlayProps) {
    return (
        <div className="relative">
            {children}
            {isLoading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-10">
                    <Spinner size="lg" />
                    {text && <p className="mt-3 text-sm text-gray-600">{text}</p>}
                </div>
            )}
        </div>
    );
}

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string | number;
    height?: string | number;
}

export function Skeleton({ className, variant = 'text', width, height }: SkeletonProps) {
    const variants = {
        text: 'h-4 rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-xl',
    };

    return (
        <div
            className={cn(
                'bg-gray-200 animate-pulse',
                variants[variant],
                className
            )}
            style={{ width, height }}
        />
    );
}

interface PageLoaderProps {
    text?: string;
}

export function PageLoader({ text = 'Caricamento...' }: PageLoaderProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Spinner size="xl" />
            <p className="mt-4 text-gray-600">{text}</p>
        </div>
    );
}
