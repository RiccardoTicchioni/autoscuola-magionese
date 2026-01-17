import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, CardContent, Badge, Accordion } from '@/components/ui';

// Patente data - in a real app, this would come from a database
const patentiData: Record<string, {
    name: string;
    subtitle: string;
    description: string;
    longDescription: string;
    minAge: number;
    icon: string;
    priceFrom: number;
    duration: string;
    includes: string[];
    requirements: string[];
    theoryHours: number;
    practiceHours: number;
    faqs: { id: string; title: string; content: string }[];
    color: string;
}> = {
    am: {
        name: 'Patente AM',
        subtitle: 'Ciclomotori e Quadricicli Leggeri',
        description: 'La patente AM ti permette di guidare ciclomotori a due ruote, ciclomotori a tre ruote e quadricicli leggeri.',
        longDescription: `La patente AM è la prima patente conseguibile e abilita alla guida di:
    
- Ciclomotori a due ruote (categoria L1e) con velocità massima di 45 km/h e cilindrata non superiore a 50 cc o potenza nominale continua massima non superiore a 4 kW per i motori elettrici
- Veicoli a tre ruote (categoria L2e) con velocità massima di 45 km/h e cilindrata non superiore a 50 cc o potenza nominale continua massima non superiore a 4 kW per i motori elettrici  
- Quadricicli leggeri (categoria L6e) la cui massa a vuoto è inferiore o pari a 350 kg, esclusa la massa delle batterie per i veicoli elettrici, la cui velocità massima per costruzione è inferiore o uguale a 45 km/h`,
        minAge: 14,
        icon: '🛵',
        priceFrom: 350,
        duration: '1-2 mesi',
        theoryHours: 12,
        practiceHours: 6,
        includes: [
            'Corso teorico completo (12 ore)',
            'Materiale didattico',
            'Accesso illimitato alla piattaforma quiz online',
            'Esercitazioni pratiche su ciclomotore',
            'Prenotazione e accompagnamento esame teoria',
            'Prenotazione e accompagnamento esame pratica',
            'Assicurazione durante le guide',
        ],
        requirements: [
            'Età minima 14 anni',
            'Documento d\'identità valido',
            'Codice fiscale',
            'Certificato medico (rilasciato da medico autorizzato)',
            '3 foto tessera recenti',
            'Per minorenni: consenso di entrambi i genitori',
        ],
        faqs: [
            {
                id: '1',
                title: 'Quali veicoli posso guidare con la patente AM?',
                content: 'Con la patente AM puoi guidare ciclomotori a 2 e 3 ruote e quadricicli leggeri con velocità massima di 45 km/h e cilindrata fino a 50cc.',
            },
            {
                id: '2',
                title: 'Quanto tempo ci vuole per prendere la patente AM?',
                content: 'In media 1-2 mesi, a seconda della tua disponibilità. Il corso teorico dura circa 2 settimane, poi si passa alla pratica.',
            },
            {
                id: '3',
                title: 'Posso guidare in autostrada con la patente AM?',
                content: 'No, i ciclomotori e i veicoli guidabili con patente AM non possono circolare in autostrada e sulle strade extraurbane principali.',
            },
        ],
        color: 'from-blue-500 to-blue-700',
    },
    b: {
        name: 'Patente B',
        subtitle: 'Autovetture e Veicoli Leggeri',
        description: 'La patente B è la più diffusa e permette di guidare autovetture, piccoli autocarri e alcuni veicoli speciali.',
        longDescription: `La patente B è la patente più comune in Italia e abilita alla guida di:

- Autoveicoli con massa complessiva a pieno carico non superiore a 3.500 kg e progettati per il trasporto di non più di 8 persone oltre al conducente
- Autoveicoli con rimorchio leggero (massa massima rimorchio 750 kg)
- Autoveicoli con rimorchio non leggero, purché la massa complessiva non superi 3.500 kg
- Macchine agricole, anche eccezionali
- Macchine operatrici, eccetto quelle eccezionali
- Motocicli fino a 125 cc e 11 kW (solo in Italia, dopo 1 anno dal conseguimento)`,
        minAge: 18,
        icon: '🚗',
        priceFrom: 600,
        duration: '2-4 mesi',
        theoryHours: 24,
        practiceHours: 6,
        includes: [
            'Corso teorico completo (24 ore)',
            'Materiale didattico aggiornato',
            'Accesso illimitato alla piattaforma quiz online',
            '6 ore di guide obbligatorie certificate',
            'Guide aggiuntive personalizzate',
            'Simulazione esame pratico',
            'Prenotazione e accompagnamento esami',
            'Assicurazione durante le guide',
            'Uso del veicolo per l\'esame',
        ],
        requirements: [
            'Età minima 18 anni',
            'Documento d\'identità valido',
            'Codice fiscale',
            'Certificato medico (rilasciato da medico autorizzato)',
            '3 foto tessera recenti',
            'Eventuale patente precedente (se posseduta)',
        ],
        faqs: [
            {
                id: '1',
                title: 'Quante ore di guida sono obbligatorie?',
                content: 'Sono obbligatorie 6 ore di guide certificate: 2 in condizioni di visione notturna, 2 su strade extraurbane e 2 in autostrada. Consigliamo almeno 15-20 ore totali per essere pronti all\'esame.',
            },
            {
                id: '2',
                title: 'Posso guidare moto con la patente B?',
                content: 'Sì, dopo almeno 1 anno dal conseguimento della patente B puoi guidare motocicli fino a 125 cc e 11 kW, ma solo in Italia.',
            },
            {
                id: '3',
                title: 'Quanto costa prendere la patente B?',
                content: 'Il nostro pacchetto base parte da €600 e include tutto il necessario. Il costo finale dipende dal numero di guide pratiche necessarie.',
            },
            {
                id: '4',
                title: 'Cosa succede se non passo l\'esame?',
                content: 'Hai la possibilità di ripetere l\'esame. L\'esame teoria può essere ripetuto entro 6 mesi dalla data di iscrizione, mentre l\'esame pratica può essere ripetuto una volta.',
            },
        ],
        color: 'from-orange-500 to-orange-700',
    },
    a1: {
        name: 'Patente A1',
        subtitle: 'Motocicli fino a 125cc',
        description: 'La patente A1 abilita alla guida di motocicli con cilindrata massima di 125cc e potenza non superiore a 11 kW.',
        longDescription: `La patente A1 consente la guida di:

- Motocicli con cilindrata massima di 125 cc, potenza massima di 11 kW e un rapporto potenza/peso non superiore a 0,1 kW/kg
- Tricicli con potenza non superiore a 15 kW
- Macchine agricole che non superino i limiti di sagoma dei motoveicoli`,
        minAge: 16,
        icon: '🏍️',
        priceFrom: 450,
        duration: '2-3 mesi',
        theoryHours: 24,
        practiceHours: 6,
        includes: [
            'Corso teorico completo',
            'Materiale didattico',
            'Accesso piattaforma quiz online',
            '6 ore di guide obbligatorie certificate',
            'Prenotazione e accompagnamento esami',
            'Assicurazione durante le guide',
        ],
        requirements: [
            'Età minima 16 anni',
            'Documento d\'identità valido',
            'Codice fiscale',
            'Certificato medico',
            '3 foto tessera recenti',
            'Per minorenni: consenso di entrambi i genitori',
        ],
        faqs: [
            {
                id: '1',
                title: 'A 18 anni posso passare alla patente A2?',
                content: 'Sì, con almeno 2 anni di patente A1, a 18 anni puoi fare un esame pratico semplificato per ottenere la patente A2.',
            },
        ],
        color: 'from-purple-500 to-purple-700',
    },
    a2: {
        name: 'Patente A2',
        subtitle: 'Motocicli fino a 35kW',
        description: 'La patente A2 consente di guidare motocicli con potenza non superiore a 35 kW.',
        longDescription: `La patente A2 abilita alla guida di:

- Motocicli con potenza non superiore a 35 kW con un rapporto potenza/peso non superiore a 0,2 kW/kg e che non siano derivati da una versione che sviluppa oltre il doppio della potenza massima`,
        minAge: 18,
        icon: '🏍️',
        priceFrom: 500,
        duration: '2-3 mesi',
        theoryHours: 24,
        practiceHours: 6,
        includes: [
            'Corso teorico completo',
            'Materiale didattico',
            'Accesso piattaforma quiz online',
            '6 ore di guide obbligatorie certificate',
            'Prenotazione e accompagnamento esami',
            'Assicurazione durante le guide',
        ],
        requirements: [
            'Età minima 18 anni',
            'Documento d\'identità valido',
            'Codice fiscale',
            'Certificato medico',
            '3 foto tessera recenti',
        ],
        faqs: [],
        color: 'from-indigo-500 to-indigo-700',
    },
    a: {
        name: 'Patente A',
        subtitle: 'Motocicli senza limiti',
        description: 'La patente A permette di guidare qualsiasi tipo di motociclo senza limitazioni di cilindrata o potenza.',
        longDescription: `La patente A abilita alla guida di:

- Motocicli di qualsiasi cilindrata e potenza
- Tricicli di potenza superiore a 15 kW (solo per chi ha più di 21 anni)`,
        minAge: 24,
        icon: '🏍️',
        priceFrom: 550,
        duration: '2-3 mesi',
        theoryHours: 24,
        practiceHours: 6,
        includes: [
            'Corso teorico completo',
            'Materiale didattico',
            'Accesso piattaforma quiz online',
            '6 ore di guide obbligatorie certificate',
            'Prenotazione e accompagnamento esami',
            'Assicurazione durante le guide',
        ],
        requirements: [
            'Età minima 24 anni (oppure 20 anni con almeno 2 anni di patente A2)',
            'Documento d\'identità valido',
            'Codice fiscale',
            'Certificato medico',
            '3 foto tessera recenti',
        ],
        faqs: [],
        color: 'from-red-500 to-red-700',
    },
    b96: {
        name: 'Patente B96',
        subtitle: 'Auto + Rimorchio fino a 4.250kg',
        description: 'Estensione della patente B per trainare rimorchi con massa complessiva fino a 4.250 kg.',
        longDescription: `La patente B96 è un\'estensione della patente B che consente di:

- Guidare autoveicoli di categoria B con un rimorchio la cui massa massima autorizzata superi 750 kg, a condizione che la massa massima autorizzata di tale combinazione sia superiore a 3.500 kg ma non superi 4.250 kg`,
        minAge: 18,
        icon: '🚙',
        priceFrom: 350,
        duration: '2-4 settimane',
        theoryHours: 0,
        practiceHours: 7,
        includes: [
            'Corso pratico (7 ore)',
            'Esame pratico',
            'Assicurazione durante le guide',
        ],
        requirements: [
            'Patente B in corso di validità',
            'Documento d\'identità valido',
        ],
        faqs: [],
        color: 'from-teal-500 to-teal-700',
    },
    be: {
        name: 'Patente BE',
        subtitle: 'Auto + Rimorchio Pesante',
        description: 'La patente BE abilita alla guida di autoveicoli di categoria B con rimorchio di massa superiore a 750 kg.',
        longDescription: `La patente BE abilita alla guida di:

- Complessi di veicoli composti da una motrice della categoria B e un rimorchio o semirimorchio la cui massa massima autorizzata superi 750 kg ma non superi 3.500 kg`,
        minAge: 18,
        icon: '🚙',
        priceFrom: 400,
        duration: '3-4 settimane',
        theoryHours: 0,
        practiceHours: 7,
        includes: [
            'Corso pratico',
            'Esame pratico',
            'Assicurazione durante le guide',
        ],
        requirements: [
            'Patente B in corso di validità',
            'Documento d\'identità valido',
            'Certificato medico',
        ],
        faqs: [],
        color: 'from-green-500 to-green-700',
    },
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const patente = patentiData[slug];

    if (!patente) {
        return { title: 'Patente non trovata' };
    }

    return {
        title: patente.name,
        description: patente.description,
    };
}

export async function generateStaticParams() {
    return Object.keys(patentiData).map((slug) => ({ slug }));
}

export default async function PatentePage({ params }: Props) {
    const { slug } = await params;
    const patente = patentiData[slug];

    if (!patente) {
        notFound();
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className={`py-16 lg:py-24 bg-gradient-to-br ${patente.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/patenti" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Tutte le patenti
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-6xl">{patente.icon}</span>
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                                        {patente.name}
                                    </h1>
                                    <p className="text-xl text-white/80">{patente.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-lg text-white/90 max-w-2xl mt-4">
                                {patente.description}
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                                    <p className="text-white/70 text-xs">Età minima</p>
                                    <p className="text-white font-bold text-lg">{patente.minAge} anni</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                                    <p className="text-white/70 text-xs">A partire da</p>
                                    <p className="text-white font-bold text-lg">€{patente.priceFrom}</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                                    <p className="text-white/70 text-xs">Durata media</p>
                                    <p className="text-white font-bold text-lg">{patente.duration}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="w-full lg:w-auto">
                            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                                <CardContent className="p-6 text-center">
                                    <p className="text-gray-600 mb-2">Prezzo a partire da</p>
                                    <p className="text-4xl font-bold text-gray-900 mb-4">€{patente.priceFrom}</p>
                                    <Link href="/iscrizione" className="block">
                                        <Button size="lg" variant="secondary" className="w-full mb-3">
                                            Iscriviti Online
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa puoi guidare</h2>
                            <div className="prose prose-gray max-w-none">
                                {patente.longDescription.split('\n').map((paragraph, i) => (
                                    <p key={i} className="text-gray-600 whitespace-pre-line">{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* What's Included */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa include il corso</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {patente.includes.map((item, i) => (
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisiti necessari</h2>
                            <ul className="space-y-2">
                                {patente.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-600">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* FAQs */}
                        {patente.faqs.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Domande frequenti</h2>
                                <Accordion items={patente.faqs} />
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Course Details */}
                            <Card variant="elevated">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-4">Dettagli corso</h3>
                                    <div className="space-y-4">
                                        {patente.theoryHours > 0 && (
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">Ore teoria</span>
                                                <span className="font-semibold text-gray-900">{patente.theoryHours} ore</span>
                                            </div>
                                        )}
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Ore pratica (min)</span>
                                            <span className="font-semibold text-gray-900">{patente.practiceHours} ore</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Durata media</span>
                                            <span className="font-semibold text-gray-900">{patente.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Età minima</span>
                                            <span className="font-semibold text-gray-900">{patente.minAge} anni</span>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-600">A partire da</span>
                                        <span className="text-2xl font-bold text-gray-900">€{patente.priceFrom}</span>
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <h3 className="font-bold text-gray-900 mb-2">Hai domande?</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Chiamaci o scrivici per maggiori informazioni
                                    </p>
                                    <a href="tel:+390751234567">
                                        <Button variant="outline" className="w-full">
                                            075 123 4567
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
