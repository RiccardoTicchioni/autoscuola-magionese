import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Informativa sulla privacy di Autoscuola Magionese. Come trattiamo i tuoi dati personali.',
};

export default function PrivacyPage() {
    return (
        <div className="pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">
                    Informativa sulla Privacy
                </h1>

                <div className="prose prose-gray max-w-none">
                    <p className="text-lg text-gray-600 mb-8">
                        Ultimo aggiornamento: Gennaio 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Titolare del Trattamento</h2>
                        <p className="text-gray-600">
                            Il Titolare del trattamento dei dati è Autoscuola Magionese S.r.l.,
                            con sede legale in Via Roma 123, 06063 Magione (PG), P.IVA 01234567890,
                            email: privacy@autoscuolamagionese.it
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dati Raccolti</h2>
                        <p className="text-gray-600 mb-4">
                            Raccogliamo le seguenti categorie di dati personali:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li><strong>Dati identificativi:</strong> nome, cognome, codice fiscale, data di nascita</li>
                            <li><strong>Dati di contatto:</strong> indirizzo email, numero di telefono, indirizzo di residenza</li>
                            <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate</li>
                            <li><strong>Documenti:</strong> documento d&apos;identità, foto tessera, certificati medici</li>
                            <li><strong>Dati di pagamento:</strong> dati della carta di credito (elaborati da Stripe)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalità del Trattamento</h2>
                        <p className="text-gray-600 mb-4">I tuoi dati vengono trattati per:</p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Gestione delle iscrizioni ai corsi</li>
                            <li>Prenotazione delle lezioni di guida</li>
                            <li>Elaborazione dei pagamenti</li>
                            <li>Comunicazioni relative ai servizi acquistati</li>
                            <li>Adempimento di obblighi di legge (Motorizzazione Civile)</li>
                            <li>Invio di comunicazioni promozionali (previo consenso)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Giuridica</h2>
                        <p className="text-gray-600">
                            Il trattamento dei dati si basa su:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Esecuzione di un contratto (iscrizione ai corsi)</li>
                            <li>Adempimento di obblighi legali</li>
                            <li>Consenso dell&apos;interessato (per finalità di marketing)</li>
                            <li>Legittimo interesse del titolare</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservazione dei Dati</h2>
                        <p className="text-gray-600">
                            I dati personali sono conservati per il tempo strettamente necessario
                            alle finalità per cui sono stati raccolti e comunque per un periodo
                            non superiore a 10 anni dalla conclusione del rapporto contrattuale,
                            salvo diversi obblighi di legge.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Condivisione dei Dati</h2>
                        <p className="text-gray-600 mb-4">
                            I tuoi dati possono essere condivisi con:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Motorizzazione Civile (per pratiche patenti)</li>
                            <li>Provider di servizi di pagamento (Stripe)</li>
                            <li>Provider di servizi email (per comunicazioni)</li>
                            <li>Consulenti e professionisti (commercialista, avvocato)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. I Tuoi Diritti</h2>
                        <p className="text-gray-600 mb-4">
                            Ai sensi del GDPR, hai diritto di:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Accedere ai tuoi dati personali</li>
                            <li>Rettificare dati inesatti</li>
                            <li>Cancellare i tuoi dati (&quot;diritto all&apos;oblio&quot;)</li>
                            <li>Limitare il trattamento</li>
                            <li>Portabilità dei dati</li>
                            <li>Opporsi al trattamento</li>
                            <li>Revocare il consenso in qualsiasi momento</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            Per esercitare i tuoi diritti, contattaci a: privacy@autoscuolamagionese.it
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sicurezza</h2>
                        <p className="text-gray-600">
                            Adottiamo misure di sicurezza tecniche e organizzative adeguate
                            per proteggere i tuoi dati personali da accessi non autorizzati,
                            perdita o distruzione.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contatti</h2>
                        <p className="text-gray-600">
                            Per qualsiasi domanda relativa al trattamento dei tuoi dati personali,
                            puoi contattarci a:
                        </p>
                        <ul className="list-none pl-0 text-gray-600 mt-4 space-y-1">
                            <li><strong>Email:</strong> privacy@autoscuolamagionese.it</li>
                            <li><strong>Telefono:</strong> 075 123 4567</li>
                            <li><strong>Indirizzo:</strong> Via Roma 123, 06063 Magione (PG)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Reclami</h2>
                        <p className="text-gray-600">
                            Hai il diritto di proporre reclamo all&apos;Autorità Garante per la
                            Protezione dei Dati Personali (www.garanteprivacy.it) qualora
                            ritenga che il trattamento dei tuoi dati sia contrario alla normativa vigente.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
