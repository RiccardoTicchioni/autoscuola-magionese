'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Checkbox, Card, CardContent } from '@/components/ui';
import { createClient } from '@/lib/supabase/client';

export default function RegistrazionePage() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gdpr: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Le password non coincidono');
            setIsLoading(false);
            return;
        }

        if (formData.password.length < 8) {
            setError('La password deve essere di almeno 8 caratteri');
            setIsLoading(false);
            return;
        }

        try {
            const supabase = createClient();
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        phone: formData.phone,
                    },
                },
            });

            if (error) {
                setError(error.message);
                return;
            }

            setSuccess(true);
        } catch {
            setError('Si è verificato un errore. Riprova più tardi.');
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 py-12 px-4">
                <div className="w-full max-w-md text-center">
                    <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        Registrazione completata!
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Ti abbiamo inviato un&apos;email di conferma.
                        Clicca sul link nell&apos;email per attivare il tuo account.
                    </p>
                    <Link href="/login">
                        <Button variant="primary">
                            Vai al login
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                            <span className="text-white font-bold text-2xl">AM</span>
                        </div>
                    </Link>
                    <h1 className="mt-6 text-3xl font-display font-bold text-gray-900">
                        Crea il tuo account
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Inizia il tuo percorso verso la patente
                    </p>
                </div>

                {/* Registration Form */}
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

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    label="Nome"
                                    placeholder="Mario"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    required
                                />
                                <Input
                                    label="Cognome"
                                    placeholder="Rossi"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    required
                                />
                            </div>

                            <Input
                                label="Email"
                                type="email"
                                placeholder="mario@esempio.it"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                autoComplete="email"
                            />

                            <Input
                                label="Telefono"
                                type="tel"
                                placeholder="+39 333 123 4567"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />

                            <Input
                                label="Password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                                helperText="Minimo 8 caratteri"
                                autoComplete="new-password"
                            />

                            <Input
                                label="Conferma Password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                required
                                autoComplete="new-password"
                            />

                            <Checkbox
                                label={
                                    <span className="text-sm">
                                        Accetto la{' '}
                                        <Link href="/privacy" className="text-primary-600 hover:underline">
                                            Privacy Policy
                                        </Link>{' '}
                                        e i{' '}
                                        <Link href="/termini" className="text-primary-600 hover:underline">
                                            Termini di Servizio
                                        </Link>
                                    </span>
                                }
                                checked={formData.gdpr}
                                onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                                required
                            />

                            <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
                                Registrati
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600 text-sm">
                                Hai già un account?{' '}
                                <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                                    Accedi
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Back to home */}
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
