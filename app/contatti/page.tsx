'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Button, Input, Textarea, Select, Checkbox, Card, CardContent } from '@/components/ui';

const sedi = [
    { value: 'centro', label: 'Autoscuola Magionese - Via Risorgimento 5' },
    { value: 'industriale', label: 'Autoscuola Etrusca - Piazza dei Navigatori 34B' },
];

const motivi = [
    { value: 'info-patente', label: 'Informazioni su patenti' },
    { value: 'info-corsi', label: 'Informazioni su corsi professionali' },
    { value: 'prenotazione', label: 'Prenotare un appuntamento' },
    { value: 'preventivo', label: 'Richiedere un preventivo' },
    { value: 'altro', label: 'Altro' },
];

export default function ContattiPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        sede: '',
        motivo: '',
        message: '',
        gdpr: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            sede: '',
            motivo: '',
            message: '',
            gdpr: false,
        });
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Contattaci
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Hai domande o vuoi maggiori informazioni?
                        Siamo qui per aiutarti. Contattaci via telefono, email o compila il modulo.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Phone */}
                            <Card variant="elevated">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Telefono</h3>
                                            <a href="tel:+39330522814" className="text-primary-600 hover:text-primary-700 font-medium block">
                                                330 522 814 (Loris)
                                            </a>
                                            <a href="tel:+393491780495" className="text-primary-600 hover:text-primary-700 font-medium block mt-1">
                                                349 178 0495 (Monica)
                                            </a>
                                            <p className="text-sm text-gray-500 mt-2">Lun-Ven: 9:00-19:00</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Email */}
                            <Card variant="elevated">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <a href="mailto:autoscuolamagionese@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
                                                autoscuolamagionese@gmail.com
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">Rispondiamo entro 24h</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* WhatsApp */}
                            <Card variant="elevated" className="bg-green-50 border-green-200">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                                            <a
                                                href="https://wa.me/393331234567?text=Ciao!%20Vorrei%20informazioni%20sui%20vostri%20corsi."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-600 hover:text-green-700 font-medium"
                                            >
                                                Chatta con noi
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">Risposta immediata</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Locations */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-900 text-lg">Le nostre sedi</h3>

                                <Card variant="outlined">
                                    <CardContent className="p-4">
                                        <h4 className="font-semibold text-gray-900">Autoscuola Magionese</h4>
                                        <p className="text-sm text-gray-600 mt-1">Via Risorgimento 5, 06063 Magione (PG)</p>
                                        <p className="text-xs text-gray-500 mt-2">Lun-Ven: 9:00-13:00, 15:00-19:00</p>
                                    </CardContent>
                                </Card>

                                <Card variant="outlined">
                                    <CardContent className="p-4">
                                        <h4 className="font-semibold text-gray-900">Autoscuola Etrusca</h4>
                                        <p className="text-sm text-gray-600 mt-1">Piazza dei Navigatori 34B, 06127 Perugia (PG)</p>
                                        <p className="text-xs text-gray-500 mt-2">Lun-Ven: 8:30-12:30, 14:30-18:30</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card variant="elevated">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un messaggio</h2>

                                    {isSuccess ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Messaggio inviato!</h3>
                                            <p className="text-gray-600 mb-6">
                                                Grazie per averci contattato. Ti risponderemo il prima possibile.
                                            </p>
                                            <Button onClick={() => setIsSuccess(false)} variant="outline">
                                                Invia un altro messaggio
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <Input
                                                    label="Nome e Cognome"
                                                    placeholder="Mario Rossi"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                />
                                                <Input
                                                    label="Email"
                                                    type="email"
                                                    placeholder="mario@esempio.it"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <Input
                                                    label="Telefono"
                                                    type="tel"
                                                    placeholder="+39 333 123 4567"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                                <Select
                                                    label="Sede di riferimento"
                                                    placeholder="Seleziona una sede"
                                                    options={sedi}
                                                    value={formData.sede}
                                                    onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                                                />
                                            </div>

                                            <Select
                                                label="Motivo del contatto"
                                                placeholder="Seleziona un motivo"
                                                options={motivi}
                                                value={formData.motivo}
                                                onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                                                required
                                            />

                                            <Textarea
                                                label="Messaggio"
                                                placeholder="Scrivi il tuo messaggio..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                            />

                                            {/* Honeypot field - hidden from users */}
                                            <input
                                                type="text"
                                                name="website"
                                                style={{ display: 'none' }}
                                                tabIndex={-1}
                                                autoComplete="off"
                                            />

                                            <Checkbox
                                                label={
                                                    <span>
                                                        Ho letto e accetto la{' '}
                                                        <a href="/privacy" className="text-primary-600 hover:underline">
                                                            Privacy Policy
                                                        </a>{' '}
                                                        e acconsento al trattamento dei miei dati personali per rispondere alla mia richiesta.
                                                    </span>
                                                }
                                                checked={formData.gdpr}
                                                onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                                                required
                                            />

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full sm:w-auto"
                                                isLoading={isSubmitting}
                                            >
                                                Invia messaggio
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Dove siamo</h2>
                        <p className="text-gray-600">Due sedi a Magione per servirti al meglio</p>
                    </div>

                    <div className="h-[400px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-500">Mappa interattiva</p>
                            <p className="text-sm text-gray-400 mt-1">La mappa verrà caricata con Leaflet/OpenStreetMap</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
