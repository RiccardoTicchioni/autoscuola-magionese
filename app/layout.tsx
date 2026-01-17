import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsAppButton, CookieBanner } from "@/components/layout";
import { ToastProvider } from "@/components/ui";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: "Autoscuola Magionese | Patenti e Corsi a Magione",
    template: "%s | Autoscuola Magionese",
  },
  description:
    "Autoscuola Magionese - La tua guida verso la patente. Corsi per patenti AM, A, B, BE, CQC, ADR e recupero punti a Magione e dintorni. Iscriviti online!",
  keywords: [
    "autoscuola",
    "patente",
    "Magione",
    "Perugia",
    "Umbria",
    "patente B",
    "patente A",
    "patente AM",
    "CQC",
    "ADR",
    "recupero punti",
    "scuola guida",
  ],
  authors: [{ name: "Autoscuola Magionese" }],
  creator: "Autoscuola Magionese",
  publisher: "Autoscuola Magionese",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Autoscuola Magionese",
    title: "Autoscuola Magionese | Patenti e Corsi a Magione",
    description:
      "La tua guida verso la patente. Corsi per patenti AM, A, B, BE, CQC, ADR e recupero punti. Iscriviti online!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autoscuola Magionese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoscuola Magionese | Patenti e Corsi a Magione",
    description:
      "La tua guida verso la patente. Corsi per patenti AM, A, B, BE, CQC, ADR e recupero punti.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <ToastProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </ToastProvider>
      </body>
    </html>
  );
}
