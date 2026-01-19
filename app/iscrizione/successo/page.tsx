import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
    title: 'Iscrizione Completata',
    description: 'La tua iscrizione è stata completata con successo.',
};

export default function SuccessoPage() {
    return (
        <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
            <div className="max-w-lg w-full mx-auto px-4 py-12">
                <Card variant="elevated">
                    <CardContent className="p-8 text-center">
                        {/* Success Icon */}
                        <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">
                            Iscrizione completata!
                        </h1>

                        <p className="text-gray-600 mb-6">
                            Grazie per esserti iscritto ad Autoscuola Magionese.
                            Ti abbiamo inviato un&apos;email di conferma con tutti i dettagli.
                        </p>

                        {/* Next Steps */}
                        <div className="bg-gray-50 rounded-xl p-6 text-left mb-6">
                            <h2 className="font-semibold text-gray-900 mb-4">Prossimi passi:</h2>
                            <ol className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                                    <span>Riceverai un&apos;email con la conferma dell&apos;iscrizione e i documenti necessari</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                                    <span>Carica i documenti richiesti nella tua area personale</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                                    <span>Verrai contattato per fissare il primo appuntamento</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                                    <span>Inizia a prepararti con i quiz online nella tua dashboard</span>
                                </li>
                            </ol>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/dashboard">
                                <Button variant="primary">
                                    Vai alla Dashboard
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline">
                                    Torna alla Home
                                </Button>
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <p className="mt-6 text-sm text-gray-500">
                            Hai domande? Chiamaci al <a href="tel:+39330522814" className="text-primary-600 hover:underline">330 522 814</a>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
