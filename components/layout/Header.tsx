'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Patenti',
        href: '/patenti',
        children: [
            { name: 'Patente AM (Ciclomotore)', href: '/patenti/am' },
            { name: 'Patente A1 (125cc)', href: '/patenti/a1' },
            { name: 'Patente A2 (Moto)', href: '/patenti/a2' },
            { name: 'Patente A (Moto illimitata)', href: '/patenti/a' },
            { name: 'Patente B (Auto)', href: '/patenti/b' },
            { name: 'Patente B96', href: '/patenti/b96' },
            { name: 'Patente BE (Rimorchio)', href: '/patenti/be' },
        ],
    },
    {
        name: 'Corsi',
        href: '/corsi',
        children: [
            { name: 'CQC Persone', href: '/corsi/cqc-persone' },
            { name: 'CQC Merci', href: '/corsi/cqc-merci' },
            { name: 'ADR', href: '/corsi/adr' },
            { name: 'Cronotachigrafo', href: '/corsi/cronotachigrafo' },
            { name: 'Carta KB', href: '/corsi/carta-kb' },
            { name: 'Recupero Punti', href: '/corsi/recupero-punti' },
        ],
    },
    { name: 'Sedi', href: '/sedi' },
    { name: 'Contatti', href: '/contatti' },
];

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
    const [isScrolled, setIsScrolled] = React.useState(false);

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-soft'
                    : 'bg-transparent'
            )}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/images/logo.png"
                            alt="Autoscuola Magionese"
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                        />
                        <div className="hidden sm:block">
                            <p className={cn(
                                'font-display font-bold text-lg transition-colors',
                                isScrolled ? 'text-gray-900' : 'text-white'
                            )}>
                                Autoscuola Magionese
                            </p>
                            <p className={cn(
                                'text-xs transition-colors',
                                isScrolled ? 'text-gray-500' : 'text-white/70'
                            )}>
                                La tua guida verso la patente
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1',
                                        pathname === item.href || pathname.startsWith(item.href + '/')
                                            ? isScrolled
                                                ? 'text-primary-600 bg-primary-50'
                                                : 'text-white bg-white/20'
                                            : isScrolled
                                                ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                                                : 'text-white/90 hover:text-white hover:bg-white/20'
                                    )}
                                >
                                    {item.name}
                                    {item.children && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown */}
                                {item.children && openDropdown === item.name && (
                                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-soft-lg border border-gray-100 py-2 animate-fade-in">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={cn(
                                                    'block px-4 py-2.5 text-sm transition-colors',
                                                    pathname === child.href
                                                        ? 'text-primary-600 bg-primary-50'
                                                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                                                )}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/login">
                            <Button
                                variant={isScrolled ? 'ghost' : 'outline'}
                                size="sm"
                                className={!isScrolled ? 'border-white text-white hover:bg-white/20' : ''}
                            >
                                Accedi
                            </Button>
                        </Link>
                        <Link href="/iscrizione">
                            <Button variant="secondary" size="sm">
                                Iscriviti Online
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            'lg:hidden p-2 rounded-lg transition-colors',
                            isScrolled
                                ? 'text-gray-600 hover:bg-gray-100'
                                : 'text-white hover:bg-white/20'
                        )}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-soft-lg animate-fade-in">
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'block px-4 py-3 rounded-lg font-medium transition-colors',
                                        pathname === item.href || pathname.startsWith(item.href + '/')
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                                    )}
                                >
                                    {item.name}
                                </Link>
                                {item.children && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={cn(
                                                    'block px-4 py-2 text-sm rounded-lg transition-colors',
                                                    pathname === child.href
                                                        ? 'text-primary-600 bg-primary-50'
                                                        : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'
                                                )}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                            <Link href="/login" className="block">
                                <Button variant="outline" className="w-full">
                                    Accedi
                                </Button>
                            </Link>
                            <Link href="/iscrizione" className="block">
                                <Button variant="secondary" className="w-full">
                                    Iscriviti Online
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
