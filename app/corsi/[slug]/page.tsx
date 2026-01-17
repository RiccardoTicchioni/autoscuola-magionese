import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, CardContent, Badge } from '@/components/ui';

// Course data
const corsiData: Record<string, {
    name: string;
    subtitle: string;
    description: string;
    longDescription: string;
    icon: string;
    priceFrom: number;
    duration: string;
    includes: string[];
    requirements: string[];
    modules: { title: string; hours: number }[];
    color: string;
}> = {
    'cqc-persone': {
        name: 'CQC Persone',
        subtitle: 'Carta di Qualificazione Conducente per trasporto passeggeri',
        description: 'Abilitazione obbligatoria per il trasporto professionale di passeggeri.',
        longDescription: `La CQC Persone è la Carta di Qualificazione del Conducente obbligatoria per chi intende svolgere professionalmente l\'attività di autista per il trasporto di persone.

È richiesta per guidare autobus e pullman in ambito professionale e deve essere rinnovata ogni 5 anni tramite corso di formazione periodica.`,
        icon: '🚌',
        priceFrom: 1200,
        duration: '140 ore',
        includes: [
            'Corso teorico completo (130 ore)',
            'Corso pratico (10 ore)',
            'Materiale didattico',
            'Simulazioni d\'esame',
            'Prenotazione esame',
        ],
        requirements: [
            'Patente C o D in corso di validità',
            'Età minima 21 anni',
            'Documento d\'identità valido',
        ],
        modules: [
            { title: 'Formazione avanzata guida razionale', hours: 65 },
            { title: 'Normativa trasporto persone', hours: 32.5 },
            { title: 'Salute, sicurezza stradale e ambientale', hours: 32.5 },
            { title: 'Formazione pratica', hours: 10 },
        ],
        color: 'from-blue-500 to-cyan-500',
    },
    'cqc-merci': {
        name: 'CQC Merci',
        subtitle: 'Carta di Qualificazione Conducente per trasporto merci',
        description: 'Abilitazione obbligatoria per il trasporto professionale di merci.',
        longDescription: `La CQC Merci è la Carta di Qualificazione del Conducente obbligatoria per chi svolge professionalmente l\'attività di autista per il trasporto di merci con veicoli di massa superiore a 3,5 tonnellate.`,
        icon: '🚛',
        priceFrom: 1200,
        duration: '140 ore',
        includes: [
            'Corso teorico completo (130 ore)',
            'Corso pratico (10 ore)',
            'Materiale didattico',
            'Simulazioni d\'esame',
            'Prenotazione esame',
        ],
        requirements: [
            'Patente C in corso di validità',
            'Età minima 18/21 anni',
            'Documento d\'identità valido',
        ],
        modules: [
            { title: 'Formazione avanzata guida razionale', hours: 65 },
            { title: 'Normativa trasporto merci', hours: 32.5 },
            { title: 'Salute, sicurezza stradale e ambientale', hours: 32.5 },
            { title: 'Formazione pratica', hours: 10 },
        ],
        color: 'from-orange-500 to-red-500',
    },
    'adr': {
        name: 'Corso ADR',
        subtitle: 'Patentino Merci Pericolose',
        description: 'Patentino per il trasporto di merci pericolose su strada.',
        longDescription: `Il corso ADR (Accord Dangereuses Route) è obbligatorio per tutti i conducenti che trasportano merci pericolose su strada.

Offriamo il corso base e le specializzazioni per cisterne, esplosivi e radioattivi.`,
        icon: '⚠️',
        priceFrom: 400,
        duration: '18-36 ore',
        includes: [
            'Corso teorico',
            'Materiale didattico',
            'Esame finale',
            'Rilascio patentino',
        ],
        requirements: [
            'Patente B, C o superiore',
            'Età minima 18 anni',
        ],
        modules: [
            { title: 'Corso base', hours: 18 },
            { title: 'Specializzazione cisterne', hours: 12 },
            { title: 'Specializzazione esplosivi', hours: 8 },
        ],
        color: 'from-yellow-500 to-orange-500',
    },
    'cronotachigrafo': {
        name: 'Cronotachigrafo',
        subtitle: 'Uso e Normativa Tempi di Guida',
        description: 'Corso sull\'utilizzo del cronotachigrafo digitale e normativa.',
        longDescription: `Il corso sul cronotachigrafo fornisce tutte le competenze necessarie per l\'utilizzo corretto del dispositivo e la conoscenza della normativa sui tempi di guida e riposo.`,
        icon: '⏱️',
        priceFrom: 150,
        duration: '8 ore',
        includes: [
            'Corso teorico',
            'Esercitazioni pratiche',
            'Materiale didattico',
            'Attestato di frequenza',
        ],
        requirements: [
            'Patente C, D, CE, DE',
        ],
        modules: [
            { title: 'Normativa tempi guida e riposo', hours: 4 },
            { title: 'Uso pratico cronotachigrafo', hours: 4 },
        ],
        color: 'from-purple-500 to-indigo-500',
    },
    'carta-kb': {
        name: 'Carta KB',
        subtitle: 'Abilitazione Autotrasporto Conto Terzi',
        description: 'Abilitazione per esercitare l\'attività di autotrasporto.',
        longDescription: `Il corso per l\'ottenimento della Carta KB è necessario per chi vuole avviare un\'attività di autotrasporto di merci per conto terzi.`,
        icon: '📋',
        priceFrom: 800,
        duration: '80 ore',
        includes: [
            'Corso teorico completo',
            'Materiale didattico',
            'Simulazioni d\'esame',
            'Esame finale',
        ],
        requirements: [
            'Maggiore età',
            'Requisiti di onorabilità',
        ],
        modules: [
            { title: 'Diritto ed economia dei trasporti', hours: 40 },
            { title: 'Normativa fiscale e amministrativa', hours: 40 },
        ],
        color: 'from-green-500 to-teal-500',
    },
    'recupero-punti': {
        name: 'Recupero Punti',
        subtitle: 'Corsi per Patenti A/B e Superiori',
        description: 'Corsi per recuperare fino a 6 o 9 punti della patente.',
        longDescription: `I corsi di recupero punti permettono di recuperare i punti decurtati dalla patente a seguito di infrazioni al Codice della Strada.

- Patenti A e B: corso di 12 ore per recuperare fino a 6 punti
- Patenti superiori: corso di 18 ore per recuperare fino a 9 punti`,
        icon: '📊',
        priceFrom: 180,
        duration: '12-18 ore',
        includes: [
            'Corso teorico',
            'Materiale didattico',
            'Attestato di frequenza',
            'Comunicazione alla Motorizzazione',
        ],
        requirements: [
            'Patente in corso di validità',
            'Punti decurtati (non azzerati)',
        ],
        modules: [
            { title: 'Corso patenti A/B (recupero 6 punti)', hours: 12 },
            { title: 'Corso patenti superiori (recupero 9 punti)', hours: 18 },
        ],
        color: 'from-pink-500 to-rose-500',
    },
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const corso = corsiData[slug];

    if (!corso) {
        return { title: 'Corso non trovato' };
    }

    return {
        title: corso.name,
        description: corso.description,
    };
}

export async function generateStaticParams() {
    return Object.keys(corsiData).map((slug) => ({ slug }));
}

export default async function CorsoPage({ params }: Props) {
    const { slug } = await params;
    const corso = corsiData[slug];

    if (!corso) {
        notFound();
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className={`py-16 lg:py-24 bg-gradient-to-br ${corso.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/corsi" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Tutti i corsi
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-6xl">{corso.icon}</span>
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                                        {corso.name}
                                    </h1>
                                    <p className="text-xl text-white/80">{corso.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-lg text-white/90 max-w-2xl mt-4">
                                {corso.description}
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                                    <p className="text-white/70 text-xs">A partire da</p>
                                    <p className="text-white font-bold text-lg">€{corso.priceFrom}</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                                    <p className="text-white/70 text-xs">Durata</p>
                                    <p className="text-white font-bold text-lg">{corso.duration}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="w-full lg:w-auto">
                            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                                <CardContent className="p-6 text-center">
                                    <p className="text-gray-600 mb-2">Prezzo a partire da</p>
                                    <p className="text-4xl font-bold text-gray-900 mb-4">€{corso.priceFrom}</p>
                                    <Link href="/iscrizione" className="block">
                                        <Button size="lg" variant="secondary" className="w-full mb-3">
                                            Iscriviti al Corso
                                        </Button>
                                    </Link>
                                    <Link href="/contatti" className="block">
                                        <Button size="lg" variant="outline" className="w-full">
                                            Richiedi Info
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrizione del corso</h2>
                            <div className="prose prose-gray max-w-none">
                                {corso.longDescription.split('\n').map((paragraph, i) => (
                                    <p key={i} className="text-gray-600 whitespace-pre-line">{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Modules */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Programma del corso</h2>
                            <div className="space-y-3">
                                {corso.modules.map((module, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                        <span className="font-medium text-gray-900">{module.title}</span>
                                        <Badge variant="primary">{module.hours} ore</Badge>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What's Included */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa include</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {corso.includes.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                                        <svg className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Requirements */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisiti</h2>
                            <ul className="space-y-2">
                                {corso.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-600">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Course Details */}
                            <Card variant="elevated">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-4">Dettagli corso</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Durata</span>
                                            <span className="font-semibold text-gray-900">{corso.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Moduli</span>
                                            <span className="font-semibold text-gray-900">{corso.modules.length}</span>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-600">A partire da</span>
                                        <span className="text-2xl font-bold text-gray-900">€{corso.priceFrom}</span>
                                    </div>
                                    <Link href="/iscrizione" className="block">
                                        <Button variant="secondary" className="w-full">
                                            Iscriviti ora
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Contact Card */}
                            <Card variant="outlined">
                                <CardContent className="p-6 text-center">
                                    <svg className="w-12 h-12 mx-auto text-primary-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <h3 className="font-bold text-gray-900 mb-2">Prossime date</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Contattaci per conoscere le prossime date disponibili
                                    </p>
                                    <Link href="/contatti">
                                        <Button variant="outline" className="w-full">
                                            Richiedi informazioni
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
