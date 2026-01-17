'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie_consent';

export function CookieBanner() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [showDetails, setShowDetails] = React.useState(false);
    const [preferences, setPreferences] = React.useState<CookiePreferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    React.useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
        setIsVisible(false);

        // Here you would typically initialize analytics/marketing scripts based on preferences
        if (prefs.analytics) {
            // Initialize analytics
            console.log('Analytics enabled');
        }
        if (prefs.marketing) {
            // Initialize marketing
            console.log('Marketing enabled');
        }
    };

    const acceptAll = () => {
        savePreferences({ necessary: true, analytics: true, marketing: true });
    };

    const acceptNecessary = () => {
        savePreferences({ necessary: true, analytics: false, marketing: false });
    };

    const saveCustom = () => {
        savePreferences(preferences);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">La tua privacy è importante</h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
                                Puoi personalizzare le tue preferenze o accettare tutti i cookie.
                            </p>
                        </div>
                    </div>

                    {/* Detailed Options */}
                    {showDetails && (
                        <div className="mt-6 space-y-4 p-4 bg-gray-50 rounded-xl animate-fade-in">
                            {/* Necessary */}
                            <label className="flex items-start gap-3 cursor-not-allowed">
                                <input
                                    type="checkbox"
                                    checked={preferences.necessary}
                                    disabled
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-600 cursor-not-allowed"
                                />
                                <div>
                                    <p className="font-medium text-gray-900">Cookie necessari</p>
                                    <p className="text-sm text-gray-500">
                                        Essenziali per il funzionamento del sito. Non possono essere disattivati.
                                    </p>
                                </div>
                            </label>

                            {/* Analytics */}
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={preferences.analytics}
                                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-600 cursor-pointer"
                                />
                                <div>
                                    <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                                        Cookie analitici
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Ci aiutano a capire come utilizzi il sito per migliorare l&apos;esperienza utente.
                                    </p>
                                </div>
                            </label>

                            {/* Marketing */}
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={preferences.marketing}
                                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                    className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-600 cursor-pointer"
                                />
                                <div>
                                    <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                                        Cookie di marketing
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Utilizzati per mostrarti contenuti personalizzati e pubblicità rilevanti.
                                    </p>
                                </div>
                            </label>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={acceptNecessary}
                            className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
                        >
                            Solo necessari
                        </button>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className={cn(
                                'px-5 py-2.5 text-sm font-medium rounded-xl transition-colors',
                                showDetails
                                    ? 'text-primary-600 bg-primary-50'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            )}
                        >
                            {showDetails ? 'Nascondi opzioni' : 'Personalizza'}
                        </button>
                        {showDetails && (
                            <button
                                onClick={saveCustom}
                                className="px-5 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors"
                            >
                                Salva preferenze
                            </button>
                        )}
                        <button
                            onClick={acceptAll}
                            className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 rounded-xl shadow-lg shadow-primary-500/25 transition-all sm:ml-auto"
                        >
                            Accetta tutti
                        </button>
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                        <a href="/privacy" className="hover:text-primary-600 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/cookie" className="hover:text-primary-600 transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
