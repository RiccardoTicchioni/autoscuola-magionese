import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent, Badge } from '@/components/ui';

export const metadata: Metadata = {
    title: 'Patenti - Tutte le categorie',
    description: 'Scopri tutti i tipi di patenti disponibili: AM, A1, A2, A, B, B96, BE. Corsi teorici e pratici con istruttori qualificati.',
};

const patenti = [
    {
        id: 'am',
        name: 'Patente AM',
        subtitle: 'Ciclomotori e Quadricicli Leggeri',
        description: 'La patente AM ti permette di guidare ciclomotori a due ruote, ciclomotori a tre ruole e quadricicli leggeri con velocità massima di 45 km/h.',
        minAge: 14,
        icon: '🛵',
        priceFrom: 350,
        duration: '1-2 mesi',
        includes: ['Corso teoria', 'Esercitazioni pratiche', 'Esame teoria', 'Esame pratica'],
        popular: false,
        color: 'from-blue-400 to-blue-600',
    },
    {
        id: 'a1',
        name: 'Patente A1',
        subtitle: 'Motocicli fino a 125cc',
        description: 'La patente A1 abilita alla guida di motocicli con cilindrata massima di 125cc e potenza non superiore a 11 kW.',
        minAge: 16,
        icon: '🏍️',
        priceFrom: 450,
        duration: '2-3 mesi',
        includes: ['Corso teoria', '6 ore guide obbligatorie', 'Esame teoria', 'Esame pratica'],
        popular: false,
        color: 'from-purple-400 to-purple-600',
    },
    {
        id: 'a2',
        name: 'Patente A2',
        subtitle: 'Motocicli fino a 35kW',
        description: 'La patente A2 consente di guidare motocicli con potenza non superiore a 35 kW e rapporto potenza/peso non superiore a 0,2 kW/kg.',
        minAge: 18,
        icon: '🏍️',
        priceFrom: 500,
        duration: '2-3 mesi',
        includes: ['Corso teoria', '6 ore guide obbligatorie', 'Esame teoria', 'Esame pratica'],
        popular: false,
        color: 'from-indigo-400 to-indigo-600',
    },
    {
        id: 'a',
        name: 'Patente A',
        subtitle: 'Motocicli senza limiti',
        description: 'La patente A permette di guidare qualsiasi tipo di motociclo senza limitazioni di cilindrata o potenza.',
        minAge: 24,
        icon: '🏍️',
        priceFrom: 550,
        duration: '2-3 mesi',
        includes: ['Corso teoria', '6 ore guide obbligatorie', 'Esame teoria', 'Esame pratica'],
        popular: false,
        color: 'from-red-400 to-red-600',
    },
    {
        id: 'b',
        name: 'Patente B',
        subtitle: 'Autovetture e Veicoli Leggeri',
        description: 'La patente B è la più diffusa e permette di guidare autovetture con massa massima di 3.500 kg e fino a 9 posti.',
        minAge: 18,
        icon: '🚗',
        priceFrom: 600,
        duration: '2-4 mesi',
        includes: ['Corso teoria', '6 ore guide obbligatorie', 'Esame teoria', 'Esame pratica', 'Accesso quiz online'],
        popular: true,
        color: 'from-orange-400 to-orange-600',
    },
    {
        id: 'b96',
        name: 'Patente B96',
        subtitle: 'Auto + Rimorchio fino a 4.250kg',
        description: 'Estensione della patente B che permette di trainare rimorchi con massa complessiva del veicolo più rimorchio fino a 4.250 kg.',
        minAge: 18,
        icon: '🚙',
        priceFrom: 350,
        duration: '2-4 settimane',
        includes: ['Corso pratico', 'Esame pratica'],
        popular: false,
        color: 'from-teal-400 to-teal-600',
    },
    {
        id: 'be',
        name: 'Patente BE',
        subtitle: 'Auto + Rimorchio Pesante',
        description: 'La patente BE abilita alla guida di autoveicoli di categoria B con rimorchio di massa superiore a 750 kg.',
        minAge: 18,
        icon: '🚙',
        priceFrom: 400,
        duration: '3-4 settimane',
        includes: ['Corso pratico', 'Esame pratica'],
        popular: false,
        color: 'from-green-400 to-green-600',
    },
];

export default function PatentiPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">Patenti</Badge>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Scegli la tua patente
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Dalla A1 per motocicli alla BE per rimorchi pesanti.
                        Trova il corso giusto per le tue esigenze.
                    </p>
                </div>
            </section>

            {/* Patenti Grid */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {patenti.map((patente) => (
                            <Link key={patente.id} href={`/patenti/${patente.id}`}>
                                <Card variant="elevated" hover className="h-full group relative overflow-hidden">
                                    {patente.popular && (
                                        <Badge variant="secondary" className="absolute top-4 right-4 z-10">
                                            Più richiesta
                                        </Badge>
                                    )}

                                    {/* Gradient Header */}
                                    <div className={`h-32 bg-gradient-to-br ${patente.color} flex items-center justify-center relative`}>
                                        <span className="text-6xl">{patente.icon}</span>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </div>

                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h2 className="text-xl font-bold text-gray-900">{patente.name}</h2>
                                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                                                {patente.minAge}+ anni
                                            </span>
                                        </div>
                                        <p className="text-sm text-primary-600 font-medium mb-3">{patente.subtitle}</p>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{patente.description}</p>

                                        {/* Duration */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <p className="text-xs text-gray-500">Durata media</p>
                                                <p className="text-lg font-bold text-gray-900">{patente.duration}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500">Età minima</p>
                                                <p className="text-sm font-medium text-gray-700">{patente.minAge} anni</p>
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

            {/* Comparison Table */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Confronta le patenti
                        </h2>
                        <p className="text-gray-600">
                            Una panoramica rapida per aiutarti a scegliere
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Patente</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cosa puoi guidare</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Età minima</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Durata</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {patenti.map((patente) => (
                                    <tr key={patente.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{patente.icon}</span>
                                                <span className="font-semibold text-gray-900">{patente.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{patente.subtitle}</td>
                                        <td className="px-6 py-4 text-center text-sm text-gray-900">{patente.minAge} anni</td>
                                        <td className="px-6 py-4 text-center text-sm text-gray-600">{patente.duration}</td>
                                        <td className="px-6 py-4">
                                            <Link href={`/patenti/${patente.id}`}>
                                                <Button variant="outline" size="sm">
                                                    Dettagli
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                        Non sai quale patente scegliere?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Contattaci per una consulenza gratuita. Ti aiuteremo a trovare il percorso più adatto alle tue esigenze.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contatti">
                            <Button size="lg" variant="primary">
                                Richiedi consulenza gratuita
                            </Button>
                        </Link>
                        <Link href="/iscrizione">
                            <Button size="lg" variant="outline">
                                Iscriviti online
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
