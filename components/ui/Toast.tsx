'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ToastProps {
    id: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message?: string;
    duration?: number;
    onClose: (id: string) => void;
}

function Toast({ id, type = 'info', title, message, duration = 5000, onClose }: ToastProps) {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    const icons = {
        success: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ),
        error: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ),
        warning: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        info: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    };

    const styles = {
        success: 'bg-success-50 border-success-500 text-success-800',
        error: 'bg-error-50 border-error-500 text-error-800',
        warning: 'bg-warning-50 border-warning-500 text-warning-800',
        info: 'bg-primary-50 border-primary-500 text-primary-800',
    };

    const iconStyles = {
        success: 'text-success-500',
        error: 'text-error-500',
        warning: 'text-warning-500',
        info: 'text-primary-500',
    };

    return (
        <div
            className={cn(
                'flex items-start gap-3 p-4 rounded-xl border-l-4 shadow-soft animate-slide-in-right',
                styles[type]
            )}
            role="alert"
        >
            <div className={cn('flex-shrink-0', iconStyles[type])}>{icons[type]}</div>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{title}</p>
                {message && <p className="text-sm opacity-80 mt-0.5">{message}</p>}
            </div>
            <button
                onClick={() => onClose(id)}
                className="flex-shrink-0 p-1 hover:bg-black/5 rounded-lg transition-colors"
                aria-label="Chiudi notifica"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

// Toast Container and Context
interface ToastItem {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message?: string;
    duration?: number;
}

interface ToastContextType {
    toasts: ToastItem[];
    addToast: (toast: Omit<ToastItem, 'id'>) => void;
    removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = React.useState<ToastItem[]>([]);

    const addToast = React.useCallback((toast: Omit<ToastItem, 'id'>) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { ...toast, id }]);
    }, []);

    const removeToast = React.useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full">
                {toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} onClose={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = React.useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return {
        success: (title: string, message?: string) =>
            context.addToast({ type: 'success', title, message }),
        error: (title: string, message?: string) =>
            context.addToast({ type: 'error', title, message }),
        warning: (title: string, message?: string) =>
            context.addToast({ type: 'warning', title, message }),
        info: (title: string, message?: string) =>
            context.addToast({ type: 'info', title, message }),
    };
}
