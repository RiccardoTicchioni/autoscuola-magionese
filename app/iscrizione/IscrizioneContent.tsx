'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Select, Card, CardContent, Checkbox } from '@/components/ui';

const services = [
    { id: 'patente-am', name: 'Patente AM', icon: '🛵' },
    { id: 'patente-b', name: 'Patente B', icon: '🚗' },
    { id: 'patente-a1', name: 'Patente A1', icon: '🏍️' },
    { id: 'patente-a2', name: 'Patente A2', icon: '🏍️' },
    { id: 'patente-a', name: 'Patente A', icon: '🏍️' },
    { id: 'patente-b1', name: 'Patente B1', icon: '🚙' },
    { id: 'patente-b', name: 'Patente B', icon: '🚗' },
    { id: 'cqc-persone', name: 'CQC Persone', icon: '🚌' },
    { id: 'cqc-merci', name: 'CQC Merci', icon: '🚛' },
    { id: 'recupero-punti', name: 'Recupero Punti', icon: '📊' },
];

const branches = [
    { value: 'centro', label: 'Autoscuola Magionese - Via Risorgimento 5' },
    { value: 'industriale', label: 'Autoscuola Etrusca - Piazza dei Navigatori 34B' },
];

type Step = 1 | 2 | 3;

export default function IscrizioneContent() {
    const [step, setStep] = useState<Step>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        serviceId: '',
        branchId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        fiscalCode: '',
        birthDate: '',
        address: '',
        city: '',
        postalCode: '',
        gdpr: false,
        terms: false,
        marketing: false,
    });

    const selectedService = services.find(s => s.id === formData.serviceId);
    const selectedBranch = branches.find(b => b.value === formData.branchId);

    const handleNext = () => {
        if (step === 1 && (!formData.serviceId || !formData.branchId)) {
            setError('Seleziona un servizio e una sede');
            return;
        }
        if (step === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.fiscalCode)) {
            setError('Compila tutti i campi obbligatori');
            return;
        }
        setError(null);
        setStep((prev) => (prev + 1) as Step);
    };

    const handleBack = () => {
        setError(null);
        setStep((prev) => (prev - 1) as Step);
    };

    const handleSubmit = async () => {
        if (!formData.gdpr || !formData.terms) {
            setError('Devi accettare la privacy policy e i termini di servizio');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/iscrizione', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    serviceName: selectedService?.name,
                    branchName: selectedBranch?.label,
                }),
            });

            if (!response.ok) throw new Error('Errore durante l\'invio');
            setSuccess(true);
        } catch (err) {
            setError('Si è verificato un errore. Riprova.');
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen pt-20 bg-gray-50">
                <div className="max-w-2xl mx-auto px-4 py-12">
                    <Card variant="elevated">
                        <CardContent className="p-8 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Iscrizione Inviata! 🎉</h1>
                            <p className="text-gray-600 mb-6">
                                Grazie <strong>{formData.firstName}</strong>! La tua richiesta per <strong>{selectedService?.name}</strong> è stata ricevuta.
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 text-left">
                                <h3 className="font-semibold text-blue-900 mb-3">📍 Prossimi passi:</h3>
                                <ol className="text-blue-800 space-y-2 text-sm">
                                    <li><strong>1.</strong> Ti contatteremo entro 24 ore</li>
                                    <li><strong>2.</strong> Recati presso <strong>{selectedBranch?.label}</strong></li>
                                    <li><strong>3.</strong> Porta un documento d'identità</li>
                                    <li><strong>4.</strong> Effettua il pagamento in sede</li>
                                </ol>
                            </div>
                            <div className="flex gap-4 justify-center">
                                <Link href="/"><Button variant="outline">Torna alla Home</Button></Link>
                                <Link href="/contatti"><Button variant="primary">Contattaci</Button></Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Iscrizione Online</h1>
                    <p className="text-gray-600">Compila il form. <strong>Il pagamento avverrà in sede.</strong></p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-center">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${s === step ? 'bg-blue-600 text-white' : s < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                    {s < step ? '✓' : s}
                                </div>
                                {s < 3 && <div className={`w-24 h-1 mx-2 ${s < step ? 'bg-green-500' : 'bg-gray-200'}`} />}
                            </div>
                        ))}
                    </div>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">{error}</div>
                )}

                <Card variant="elevated">
                    <CardContent className="p-8">
                        {step === 1 && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Scegli il corso</h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {services.map((s) => (
                                            <button key={s.id} type="button" onClick={() => setFormData({ ...formData, serviceId: s.id })}
                                                className={`p-4 rounded-xl border-2 text-left ${formData.serviceId === s.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                                <span className="text-2xl mr-2">{s.icon}</span>
                                                <span className="font-semibold">{s.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Seleziona la sede</h2>
                                    <Select placeholder="Scegli sede" options={branches} value={formData.branchId} onChange={(e) => setFormData({ ...formData, branchId: e.target.value })} />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold mb-4">Dati personali</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Input label="Nome *" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                    <Input label="Cognome *" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Input label="Email *" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    <Input label="Telefono *" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                </div>
                                <Input label="Codice Fiscale *" value={formData.fiscalCode} onChange={(e) => setFormData({ ...formData, fiscalCode: e.target.value.toUpperCase() })} />
                                <Input label="Indirizzo" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Input label="Città" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                                    <Input label="CAP" value={formData.postalCode} onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} />
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold mb-4">Riepilogo</h2>
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <p><strong>Corso:</strong> {selectedService?.name}</p>
                                    <p><strong>Sede:</strong> {selectedBranch?.label}</p>
                                    <p><strong>Nome:</strong> {formData.firstName} {formData.lastName}</p>
                                    <p><strong>Email:</strong> {formData.email}</p>
                                    <p><strong>Telefono:</strong> {formData.phone}</p>
                                </div>
                                <div className="space-y-3">
                                    <Checkbox label={<>Accetto la <Link href="/privacy" className="text-blue-600">Privacy Policy</Link> *</>} checked={formData.gdpr} onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })} />
                                    <Checkbox label={<>Accetto i <Link href="/termini" className="text-blue-600">Termini</Link> *</>} checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} />
                                </div>
                                <div className="bg-green-50 rounded-xl p-4">
                                    <p className="text-green-800"><strong>💰 Pagamento in sede</strong></p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between mt-8 pt-6 border-t">
                            {step > 1 ? <Button variant="outline" onClick={handleBack}>Indietro</Button> : <Link href="/"><Button variant="ghost">Annulla</Button></Link>}
                            {step < 3 ? <Button variant="primary" onClick={handleNext}>Continua</Button> : <Button variant="primary" onClick={handleSubmit} isLoading={isLoading}>Invia Iscrizione</Button>}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
