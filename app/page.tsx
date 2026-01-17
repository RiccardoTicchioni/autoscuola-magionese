import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, CardContent, Badge, Accordion } from '@/components/ui';

// Service data
const patenti = [
  {
    id: 'am',
    name: 'Patente AM',
    description: 'Ciclomotori e quadricicli leggeri',
    minAge: '14 anni',
    icon: '🛵',
    popular: false,
  },
  {
    id: 'a1',
    name: 'Patente A1',
    description: 'Motocicli fino a 125cc',
    minAge: '16 anni',
    icon: '🏍️',
    popular: false,
  },
  {
    id: 'a2',
    name: 'Patente A2',
    description: 'Motocicli fino a 35kW',
    minAge: '18 anni',
    icon: '🏍️',
    popular: false,
  },
  {
    id: 'a',
    name: 'Patente A',
    description: 'Motocicli senza limiti',
    minAge: '24 anni',
    icon: '🏍️',
    popular: false,
  },
  {
    id: 'b',
    name: 'Patente B',
    description: 'Autovetture e veicoli leggeri',
    minAge: '18 anni',
    icon: '🚗',
    popular: true,
  },
  {
    id: 'be',
    name: 'Patente BE',
    description: 'Auto con rimorchio pesante',
    minAge: '18 anni',
    icon: '🚙',
    popular: false,
  },
];

const corsi = [
  {
    id: 'cqc-persone',
    name: 'CQC Persone',
    description: 'Trasporto passeggeri professionale',
    icon: '🚌',
  },
  {
    id: 'cqc-merci',
    name: 'CQC Merci',
    description: 'Trasporto merci professionale',
    icon: '🚛',
  },
  {
    id: 'adr',
    name: 'Corso ADR',
    description: 'Trasporto merci pericolose',
    icon: '⚠️',
  },
  {
    id: 'recupero-punti',
    name: 'Recupero Punti',
    description: 'Recupera i punti della patente',
    icon: '📊',
  },
];

const reviews = [
  {
    name: 'Marco B.',
    rating: 5,
    text: 'Istruttori preparatissimi e molto pazienti. Ho preso la patente B al primo tentativo!',
    date: '2 settimane fa',
  },
  {
    name: 'Giulia R.',
    rating: 5,
    text: 'Ottima esperienza, prezzi competitivi e staff cordiale. Consigliatissima!',
    date: '1 mese fa',
  },
  {
    name: 'Alessandro M.',
    rating: 5,
    text: 'Ho fatto il corso CQC qui, organizzazione perfetta e materiale didattico eccellente.',
    date: '3 settimane fa',
  },
];

const faqs = [
  {
    id: '1',
    title: 'Quanto costa prendere la patente B?',
    content: 'Il costo della patente B parte da €600 e include teoria, guide pratiche e esami. Contattaci per un preventivo personalizzato in base alle tue esigenze.',
  },
  {
    id: '2',
    title: 'Quante guide pratiche sono necessarie?',
    content: 'Il minimo legale sono 6 ore di guide obbligatorie certificate, ma consigliamo almeno 15-20 ore per essere pronti all\'esame. Il numero varia in base all\'esperienza pregressa.',
  },
  {
    id: '3',
    title: 'Posso fare le lezioni di teoria online?',
    content: 'Sì! Offriamo un\'area quiz online dove puoi esercitarti 24/7. Le lezioni teoriche possono essere seguite anche in presenza presso le nostre sedi.',
  },
  {
    id: '4',
    title: 'Quanto tempo ci vuole per prendere la patente?',
    content: 'In media 2-3 mesi, ma dipende dalla tua disponibilità. Con un impegno costante, puoi completare il percorso anche in 4-6 settimane.',
  },
  {
    id: '5',
    title: 'Offrite corsi per il cambio automatico?',
    content: 'Sì, abbiamo veicoli con cambio automatico. Potrai conseguire la patente B con limitazione al cambio automatico e, se vorrai, rimuovere la limitazione in seguito.',
  },
];

const stats = [
  { value: '35+', label: 'Anni di esperienza' },
  { value: '10.000+', label: 'Patenti conseguite' },
  { value: '98%', label: 'Tasso di successo' },
  { value: '5', label: 'Istruttori qualificati' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-driving.jpg"
            alt="Lezione di guida"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-primary-900/90 to-primary-800/85" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Iscrizioni aperte per la sessione invernale
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-fade-in-up">
            La tua guida verso
            <br />
            <span className="text-secondary-400">la patente</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Dal 1985 formiamo guidatori sicuri e responsabili.
            <br />
            Patenti auto, moto, professionali e corsi di recupero punti.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/iscrizione">
              <Button size="xl" variant="secondary" className="w-full sm:w-auto pulse-button">
                Iscriviti Online
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/dashboard/quiz">
              <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                Prenota una Guida
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Patenti Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" size="lg" className="mb-4">Patenti</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Scegli la tua patente
            </h2>
            <p className="text-lg text-gray-600">
              Offriamo corsi per tutte le categorie di patenti, dalla AM per ciclomotori alla BE per rimorchi.
            </p>
          </div>

          {/* Patenti Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {patenti.map((patente) => (
              <Link key={patente.id} href={`/patenti/${patente.id}`}>
                <Card variant="elevated" hover className="h-full relative">
                  {patente.popular && (
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      Più richiesta
                    </Badge>
                  )}
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{patente.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{patente.name}</h3>
                    <p className="text-gray-600 mb-4">{patente.description}</p>
                    <div className="flex items-center text-sm text-primary-600 font-medium">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Età minima: {patente.minAge}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link href="/patenti">
              <Button variant="outline" size="lg">
                Vedi tutte le patenti
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Corsi Professionali Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge variant="secondary" size="lg" className="mb-4">Corsi Professionali</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Formazione per professionisti
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Corsi CQC, ADR, Cronotachigrafo e recupero punti.
                Formazione completa per chi lavora nel settore dei trasporti.
              </p>

              <div className="space-y-4">
                {corsi.map((corso) => (
                  <Link key={corso.id} href={`/corsi/${corso.id}`}>
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group">
                      <div className="text-3xl">{corso.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {corso.name}
                        </h3>
                        <p className="text-sm text-gray-500">{corso.description}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              <Link href="/corsi" className="inline-block mt-8">
                <Button variant="primary" size="lg">
                  Scopri tutti i corsi
                </Button>
              </Link>
            </div>

            {/* Right Image/Illustration */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image
                  src="/images/classroom.jpg"
                  alt="Aula di teoria"
                  fill
                  className="object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-secondary-400/30 rounded-full blur-xl" />
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary-400/30 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Perché scegliere noi
            </h2>
            <p className="text-lg text-gray-400">
              Con oltre 35 anni di esperienza, siamo il punto di riferimento per la formazione alla guida in Umbria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Istruttori Qualificati',
                description: 'Personale esperto e certificato, sempre aggiornato sulle normative.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Orari Flessibili',
                description: 'Lezioni mattutine, pomeridiane e serali per adattarci ai tuoi impegni.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Quiz Online 24/7',
                description: 'Esercitati quando vuoi con la nostra piattaforma quiz interattiva.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Prezzi Trasparenti',
                description: 'Nessun costo nascosto. Preventivi chiari e possibilità di rateizzazione.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-400">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="success" size="lg" className="mb-4">Recensioni</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Cosa dicono i nostri studenti
            </h2>
            <p className="text-lg text-gray-600">
              La soddisfazione dei nostri allievi è la nostra priorità.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold">{review.name.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-gray-900">{review.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Rating */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="font-semibold text-gray-900">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">(180+ recensioni)</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="primary" size="lg" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Domande frequenti
            </h2>
            <p className="text-lg text-gray-600">
              Trova le risposte alle domande più comuni.
            </p>
          </div>

          <Accordion items={faqs} />

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Non trovi quello che cerchi?</p>
            <Link href="/contatti">
              <Button variant="outline">
                Contattaci
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-3xl bg-gray-200 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-primary-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-primary-700 font-medium">Mappa delle sedi</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <Badge variant="primary" size="lg" className="mb-4">Le Nostre Sedi</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Sempre vicini a te
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Due sedi a Magione per offrirti il massimo della comodità.
                Parcheggio gratuito e facilmente raggiungibili.
              </p>

              {/* Location Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-gray-200 hover:border-primary-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">Sede Centro</h3>
                  <p className="text-gray-600 text-sm mb-2">Via Roma 123, 06063 Magione (PG)</p>
                  <p className="text-primary-600 text-sm font-medium">Lun-Ven: 9:00-13:00, 15:00-19:00</p>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 hover:border-primary-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">Sede Zona Industriale</h3>
                  <p className="text-gray-600 text-sm mb-2">Via dell&apos;Industria 45, 06063 Magione (PG)</p>
                  <p className="text-primary-600 text-sm font-medium">Lun-Ven: 8:30-12:30, 14:30-18:30</p>
                </div>
              </div>

              <Link href="/sedi" className="inline-block mt-8">
                <Button variant="primary" size="lg">
                  Vedi tutte le sedi
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Pronto a iniziare il tuo viaggio?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Iscriviti oggi e inizia subito il tuo percorso verso la patente.
            I nostri istruttori ti aspettano!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iscrizione">
              <Button size="xl" variant="secondary" className="w-full sm:w-auto">
                Iscriviti Ora
              </Button>
            </Link>
            <Link href="/contatti">
              <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                Richiedi Informazioni
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
