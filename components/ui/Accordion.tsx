'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    className?: string;
}

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
            );
        } else {
            setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    return (
        <div className={cn('divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden', className)}>
            {items.map((item) => {
                const isOpen = openItems.includes(item.id);
                return (
                    <div key={item.id} className="bg-white">
                        <button
                            onClick={() => toggleItem(item.id)}
                            className={cn(
                                'w-full flex items-center justify-between px-6 py-4 text-left transition-colors',
                                'hover:bg-gray-50 focus:outline-none focus:bg-gray-50',
                                isOpen && 'bg-gray-50'
                            )}
                            aria-expanded={isOpen}
                            aria-controls={`accordion-content-${item.id}`}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon && <span className="text-primary-500">{item.icon}</span>}
                                <span className="font-semibold text-gray-900">{item.title}</span>
                            </div>
                            <svg
                                className={cn(
                                    'w-5 h-5 text-gray-400 transition-transform duration-200',
                                    isOpen && 'rotate-180'
                                )}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            id={`accordion-content-${item.id}`}
                            className={cn(
                                'overflow-hidden transition-all duration-200',
                                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                            )}
                        >
                            <div className="px-6 pb-4 text-gray-600">{item.content}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
