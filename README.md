# Autoscuola Magionese - Sito Web

Sito web completo per un'autoscuola italiana con Next.js 14, TypeScript e Tailwind CSS.

---

## 🚀 Quick Start (Per sviluppatori)

### Prerequisiti
- **Node.js** 18+ (scaricalo da [nodejs.org](https://nodejs.org))
- **npm** (incluso con Node.js)
- **Git** (opzionale, per clonare)

### Installazione

```bash
# 1. Entra nella cartella del progetto
cd autoscuola-magionese

# 2. Installa le dipendenze
npm install

# 3. Crea il file delle variabili d'ambiente
cp .env.example .env.local

# 4. Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su **http://localhost:3000**

---

## 📁 Struttura del Progetto

```
autoscuola-magionese/
├── app/                    # Pagine (Next.js App Router)
│   ├── page.tsx           # Homepage
│   ├── login/             # Pagina login
│   ├── registrazione/     # Pagina registrazione
│   ├── iscrizione/        # Form iscrizione multi-step
│   ├── dashboard/         # Dashboard studente
│   ├── admin/             # Dashboard admin
│   ├── patenti/           # Pagine patenti (AM, A1, A2, A, B, BE)
│   ├── corsi/             # Pagine corsi professionali
│   ├── contatti/          # Pagina contatti
│   ├── sedi/              # Pagina sedi
│   └── api/               # API Routes (backend)
├── components/
│   ├── ui/                # Componenti riutilizzabili (Button, Card, etc.)
│   └── layout/            # Header, Footer, WhatsApp button
├── lib/                   # Utility e configurazioni
├── public/
│   └── images/            # Immagini (logo, foto)
├── types/                 # TypeScript types
└── supabase/              # Schema database e dati demo
```

---

## ✏️ Come Modificare

### Cambiare Testi
Apri il file della pagina che vuoi modificare (es. `app/page.tsx`) e cerca il testo da cambiare.

### Cambiare Colori
Modifica `tailwind.config.ts` nella sezione `colors`.

### Cambiare Logo/Immagini
Sostituisci i file in `public/images/`:
- `logo.png` - Logo dell'autoscuola
- `hero-driving.jpg` - Immagine hero homepage
- `classroom.jpg` - Immagine aula teoria

---

## 🛠️ Comandi Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia server sviluppo (http://localhost:3000) |
| `npm run build` | Crea build di produzione |
| `npm run start` | Avvia server produzione |
| `npm run lint` | Controlla errori nel codice |

---

## 🔧 Configurazione Avanzata

### Variabili d'Ambiente (.env.local)

```env
# Supabase (database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Stripe (pagamenti)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_pk
STRIPE_SECRET_KEY=your_stripe_sk

# URL del sito
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Per andare in produzione
1. Crea un progetto su [Supabase](https://supabase.com)
2. Esegui le migration in `supabase/migrations/001_initial_schema.sql`
3. Crea un account [Stripe](https://stripe.com) per i pagamenti
4. Deploy su [Vercel](https://vercel.com) (consigliato per Next.js)

---

## 📞 Supporto

Per domande sul codice, contatta il team di sviluppo.

---

**Stack**: Next.js 14 | TypeScript | Tailwind CSS | Supabase | Stripe
