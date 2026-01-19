'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Input, Card, CardContent } from '@/components/ui';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';

export default function LoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/dashboard';

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 py-12 px-4">
                <div className="w-full max-w-md text-center">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        Servizio temporaneamente non disponibile
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Il login sarà disponibile a breve. Stiamo lavorando per offrirti la migliore esperienza.
                    </p>
                    <Link href="/">
                        <Button variant="primary">
                            Torna alla home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const supabase = createClient();
            if (!supabase) {
                setError('Servizio non disponibile.');
                return;
            }
            const { error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                setError(error.message === 'Invalid login credentials'
                    ? 'Email o password non corretti'
                    : error.message);
                return;
            }

            router.push(redirect);
            router.refresh();
        } catch {
            setError('Si è verificato un errore. Riprova più tardi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                            <span className="text-white font-bold text-2xl">AM</span>
                        </div>
                    </Link>
                    <h1 className="mt-6 text-3xl font-display font-bold text-gray-900">Bentornato</h1>
                    <p className="mt-2 text-gray-600">Accedi alla tua area riservata</p>
                </div>

                <Card variant="elevated">
                    <CardContent className="p-8">
                        {error && (
                            <div className="mb-6 p-4 bg-error-50 border border-error-200 rounded-xl text-error-700 text-sm flex items-center gap-2">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input label="Email" type="email" placeholder="mario@esempio.it" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required autoComplete="email" />

                            <div>
                                <Input label="Password" type="password" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required autoComplete="current-password" />
                                <div className="mt-2 text-right">
                                    <Link href="/reset-password" className="text-sm text-primary-600 hover:text-primary-700">Password dimenticata?</Link>
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>Accedi</Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600 text-sm">
                                Non hai un account?{' '}
                                <Link href="/registrazione" className="text-primary-600 hover:text-primary-700 font-medium">Registrati</Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-xl">
                    <p className="text-sm font-medium text-primary-800 mb-2">Account demo:</p>
                    <div className="text-xs text-primary-700 space-y-1">
                        <p><strong>Admin:</strong> admin@demo.it / Demo123!</p>
                        <p><strong>Istruttore:</strong> istruttore@demo.it / Demo123!</p>
                        <p><strong>Studente:</strong> studente@demo.it / Demo123!</p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 inline-flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Torna alla home
                    </Link>
                </div>
            </div>
        </div>
    );
}
