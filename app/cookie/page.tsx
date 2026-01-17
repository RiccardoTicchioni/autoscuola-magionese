import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'Informativa sui cookie di Autoscuola Magionese. Quali cookie utilizziamo e come gestirli.',
};

export default function CookiePage() {
    return (
        <div className="pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">
                    Cookie Policy
                </h1>

                <div className="prose prose-gray max-w-none">
                    <p className="text-lg text-gray-600 mb-8">
                        Ultimo aggiornamento: Gennaio 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa sono i Cookie</h2>
                        <p className="text-gray-600">
                            I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo
                            quando visiti un sito web. Vengono utilizzati per memorizzare informazioni
                            sulla tua navigazione e migliorare la tua esperienza online.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie che Utilizziamo</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookie Necessari</h3>
                        <p className="text-gray-600 mb-4">
                            Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Nome</th>
                                        <th className="px-4 py-2 text-left">Scopo</th>
                                        <th className="px-4 py-2 text-left">Durata</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2">sb-*</td>
                                        <td className="px-4 py-2">Sessione utente (Supabase Auth)</td>
                                        <td className="px-4 py-2">Sessione</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">cookie_consent</td>
                                        <td className="px-4 py-2">Memorizza le preferenze cookie</td>
                                        <td className="px-4 py-2">1 anno</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookie Analitici</h3>
                        <p className="text-gray-600 mb-4">
                            Questi cookie ci aiutano a capire come utilizzi il sito per migliorare l&apos;esperienza utente.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Nome</th>
                                        <th className="px-4 py-2 text-left">Scopo</th>
                                        <th className="px-4 py-2 text-left">Durata</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2">_ga</td>
                                        <td className="px-4 py-2">Google Analytics - Identificazione utente</td>
                                        <td className="px-4 py-2">2 anni</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">_gid</td>
                                        <td className="px-4 py-2">Google Analytics - Identificazione sessione</td>
                                        <td className="px-4 py-2">24 ore</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookie di Marketing</h3>
                        <p className="text-gray-600 mb-4">
                            Questi cookie vengono utilizzati per mostrarti pubblicità rilevanti.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Nome</th>
                                        <th className="px-4 py-2 text-left">Scopo</th>
                                        <th className="px-4 py-2 text-left">Durata</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2">_fbp</td>
                                        <td className="px-4 py-2">Facebook Pixel</td>
                                        <td className="px-4 py-2">3 mesi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Gestire i Cookie</h2>
                        <p className="text-gray-600 mb-4">
                            Puoi gestire le tue preferenze sui cookie in qualsiasi momento:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Tramite il banner cookie che appare alla prima visita</li>
                            <li>Tramite le impostazioni del tuo browser</li>
                            <li>Tramite strumenti specifici come &quot;Your Online Choices&quot;</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Impostazioni Browser</h2>
                        <p className="text-gray-600 mb-4">
                            Puoi configurare il tuo browser per bloccare o eliminare i cookie.
                            Ecco le guide per i principali browser:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                            <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contatti</h2>
                        <p className="text-gray-600">
                            Per qualsiasi domanda relativa ai cookie, contattaci a:
                            <a href="mailto:privacy@autoscuolamagionese.it" className="text-primary-600 hover:underline ml-1">
                                privacy@autoscuolamagionese.it
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
