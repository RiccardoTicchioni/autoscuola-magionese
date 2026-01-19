import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent, Badge } from '@/components/ui';

export const metadata: Metadata = {
    title: 'Corsi Professionali',
    description: 'Corsi professionali per autisti: CQC Persone e Merci, ADR, Carta KB e Recupero Punti. Formazione certificata per il settore trasporti.',
};

const corsi = [
    {
        id: 'cqc-persone',
        name: 'CQC Persone',
        subtitle: 'Carta di Qualificazione Conducente',
        description: 'Abilitazione obbligatoria per il trasporto professionale di passeggeri con autobus e pullman.',
        icon: '🚌',
        priceFrom: 1200,
        duration: '140 ore',
        badge: 'Più richiesto',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        id: 'cqc-merci',
        name: 'CQC Merci',
        subtitle: 'Carta di Qualificazione Conducente',
        description: 'Abilitazione obbligatoria per il trasporto professionale di merci con veicoli oltre 3,5 tonnellate.',
        icon: '🚛',
        priceFrom: 1200,
        duration: '140 ore',
        badge: null,
        color: 'from-orange-500 to-red-500',
    },
    {
        id: 'adr',
        name: 'Corso ADR',
        subtitle: 'Merci Pericolose',
        description: 'Patentino per il trasporto di merci pericolose su strada. Corso base e specializzazioni.',
        icon: '⚠️',
        priceFrom: 400,
        duration: '18-36 ore',
        badge: null,
        color: 'from-yellow-500 to-orange-500',
    },
    {
        id: 'carta-kb',
        name: 'Carta KB',
        subtitle: 'Autotrasporto Conto Terzi',
        description: 'Abilitazione per esercitare l\'attività di autotrasporto di merci per conto terzi.',
        icon: '📋',
        priceFrom: 800,
        duration: '80 ore',
        badge: null,
        color: 'from-green-500 to-teal-500',
    },
    {
        id: 'recupero-punti',
        name: 'Recupero Punti',
        subtitle: 'Patente A e B / Superiori',
        description: 'Corsi per recuperare fino a 6 o 9 punti della patente in caso di decurtazione.',
        icon: '📊',
        priceFrom: 180,
        duration: '12-18 ore',
        badge: 'Disponibile subito',
        color: 'from-pink-500 to-rose-500',
    },
];

export default function CorsiPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="mb-4 bg-secondary-500/20 text-secondary-400 border-secondary-500/30">
                        Corsi Professionali
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Formazione per professionisti
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Corsi certificati per chi lavora nel settore dei trasporti.
                        CQC, ADR, Carta KB e molto altro.
                    </p>
                </div>
            </section>

            {/* Corsi Grid */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {corsi.map((corso) => (
                            <Link key={corso.id} href={`/corsi/${corso.id}`}>
                                <Card variant="elevated" hover className="h-full group relative overflow-hidden">
                                    {corso.badge && (
                                        <Badge variant="secondary" className="absolute top-4 right-4 z-10">
                                            {corso.badge}
                                        </Badge>
                                    )}

                                    {/* Gradient Header */}
                                    <div className={`h-32 bg-gradient-to-br ${corso.color} flex items-center justify-center relative`}>
                                        <span className="text-6xl">{corso.icon}</span>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </div>

                                    <CardContent className="p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-1">{corso.name}</h2>
                                        <p className="text-sm text-primary-600 font-medium mb-3">{corso.subtitle}</p>
                                        <p className="text-gray-600 text-sm mb-4">{corso.description}</p>

                                        {/* Duration */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <p className="text-xs text-gray-500">Durata</p>
                                                <p className="text-lg font-bold text-gray-900">{corso.duration}</p>
                                            </div>
                                        </div>

                                        <Button variant="primary" className="w-full mt-4 group-hover:shadow-lg transition-shadow">
                                            Scopri di più
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Professional Training */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Perché scegliere la nostra formazione
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Esperienza consolidata nella formazione professionale per autisti
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: '🏆',
                                title: 'Docenti Esperti',
                                description: 'Formatori qualificati con esperienza nel settore',
                            },
                            {
                                icon: '📚',
                                title: 'Materiale Incluso',
                                description: 'Dispense e accesso alla piattaforma e-learning',
                            },
                            {
                                icon: '🎯',
                                title: 'Alto Tasso Successo',
                                description: 'Oltre il 95% dei nostri allievi supera l\'esame',
                            },
                            {
                                icon: '📅',
                                title: 'Orari Flessibili',
                                description: 'Corsi serali e weekend disponibili',
                            },
                        ].map((feature, index) => (
                            <Card key={index} variant="default" className="text-center p-6">
                                <span className="text-4xl block mb-4">{feature.icon}</span>
                                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                        Hai bisogno di una formazione su misura?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Offriamo anche corsi personalizzati per aziende di trasporto.
                        Contattaci per un preventivo.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contatti">
                            <Button size="lg" variant="primary">
                                Richiedi preventivo aziendale
                            </Button>
                        </Link>
                        <a href="tel:+390751234567">
                            <Button size="lg" variant="outline">
                                Chiama ora: 075 123 4567
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
