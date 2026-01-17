import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.autoscuolamagionese.it';

    // Static pages
    const staticPages = [
        '',
        '/patenti',
        '/patenti/am',
        '/patenti/a1',
        '/patenti/a2',
        '/patenti/a',
        '/patenti/b',
        '/patenti/b96',
        '/patenti/be',
        '/corsi',
        '/corsi/cqc-persone',
        '/corsi/cqc-merci',
        '/corsi/adr',
        '/corsi/cronotachigrafo',
        '/corsi/carta-kb',
        '/corsi/recupero-punti',
        '/sedi',
        '/contatti',
        '/iscrizione',
        '/login',
        '/registrazione',
        '/privacy',
        '/cookie',
        '/termini',
    ];

    return staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route.includes('/patenti/') || route.includes('/corsi/') ? 0.8 : 0.6,
    }));
}
