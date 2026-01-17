import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, CardContent, Badge } from '@/components/ui';

export const metadata: Metadata = {
    title: 'Le Nostre Sedi',
    description: 'Trova la sede Autoscuola Magionese più vicina a te. Due sedi a Magione, facilmente raggiungibili con parcheggio gratuito.',
};

const sedi = [
    {
        id: 'centro',
        name: 'Sede Centro',
        address: 'Via Roma 123',
        city: 'Magione (PG)',
        cap: '06063',
        phone: '075 123 4567',
        email: 'centro@autoscuolamagionese.it',
        hours: {
            'Lunedì': '9:00 - 13:00',
            'Martedì - Venerdì': '9:00 - 13:00, 15:00 - 19:00',
            'Sabato': '9:00 - 12:30',
            'Domenica': 'Chiuso',
        },
        parking: 'Parcheggio gratuito disponibile in Piazza della Repubblica a 50 metri.',
        directions: 'Dalla E45 uscita Magione, proseguire verso il centro storico. La sede si trova accanto al municipio.',
        features: ['Aule climatizzate', 'WiFi gratuito', 'Accessibilità disabili', 'Area attesa'],
        lat: 43.1234,
        lng: 12.2056,
    },
    {
        id: 'industriale',
        name: 'Sede Zona Industriale',
        address: 'Via dell\'Industria 45',
        city: 'Magione (PG)',
        cap: '06063',
        phone: '075 123 4568',
        email: 'industriale@autoscuolamagionese.it',
        hours: {
            'Lunedì - Venerdì': '8:30 - 12:30, 14:30 - 18:30',
            'Sabato - Domenica': 'Chiuso',
        },
        parking: 'Ampio parcheggio privato gratuito.',
        directions: 'Dalla E45 uscita Magione, seguire indicazioni zona industriale. La sede si trova dopo il supermercato.',
        features: ['Pista privata', 'Aule per corsi CQC', 'Parcheggio ampio', 'Simulatore di guida'],
        lat: 43.1289,
        lng: 12.2134,
    },
];

export default function SediPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">Le Nostre Sedi</Badge>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Sempre vicini a te
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Due sedi a Magione per offrirti il massimo della comodità.
                        Parcheggio gratuito e facilmente raggiungibili.
                    </p>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-[400px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-500">Mappa interattiva</p>
                            <p className="text-sm text-gray-400 mt-1">Integrazione con Leaflet/OpenStreetMap</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Detail */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {sedi.map((sede) => (
                            <Card key={sede.id} variant="elevated" className="overflow-hidden">
                                {/* Header */}
                                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center relative">
                                    <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <Badge variant="secondary" className="absolute top-4 right-4">
                                        Attiva
                                    </Badge>
                                </div>

                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{sede.name}</h2>

                                    {/* Address */}
                                    <div className="flex items-start gap-3 mb-4 text-gray-600">
                                        <svg className="w-5 h-5 mt-0.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p>{sede.address}</p>
                                            <p>{sede.cap} {sede.city}</p>
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                        <a href={`tel:${sede.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {sede.phone}
                                        </a>
                                        <a href={`mailto:${sede.email}`} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Email
                                        </a>
                                    </div>

                                    {/* Hours */}
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Orari di apertura
                                        </h3>
                                        <div className="space-y-1 text-sm">
                                            {Object.entries(sede.hours).map(([day, hours]) => (
                                                <div key={day} className="flex justify-between">
                                                    <span className="text-gray-600">{day}</span>
                                                    <span className="text-gray-900 font-medium">{hours}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-gray-900 mb-2">Servizi disponibili</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {sede.features.map((feature, i) => (
                                                <Badge key={i} variant="primary" size="sm">{feature}</Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Parking & Directions */}
                                    <div className="space-y-3 mb-6 text-sm">
                                        <div className="p-3 bg-green-50 rounded-lg">
                                            <p className="font-medium text-green-800 mb-1">🅿️ Parcheggio</p>
                                            <p className="text-green-700">{sede.parking}</p>
                                        </div>
                                        <div className="p-3 bg-blue-50 rounded-lg">
                                            <p className="font-medium text-blue-800 mb-1">📍 Come arrivare</p>
                                            <p className="text-blue-700">{sede.directions}</p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${sede.lat},${sede.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button variant="primary" className="w-full">
                                                Indicazioni stradali
                                            </Button>
                                        </a>
                                        <a href={`tel:${sede.phone.replace(/\s/g, '')}`} className="flex-1">
                                            <Button variant="outline" className="w-full">
                                                Chiama ora
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                        Vieni a trovarci!
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Passa in una delle nostre sedi per una consulenza gratuita.
                        Ti aiuteremo a scegliere il percorso più adatto a te.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/iscrizione">
                            <Button size="lg" variant="primary">
                                Iscriviti online
                            </Button>
                        </Link>
                        <Link href="/contatti">
                            <Button size="lg" variant="outline">
                                Contattaci
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
