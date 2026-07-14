import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://slaufismrk.com';
    const serviceUpdated = new Date('2026-04-21');

    const services = [
        'pranje-fasade',
        'pranje-okucnice',
        'pranje-terasa',
        'pranje-tlakavaca',
        'pranje-prilaza',
        'kemijsko-ciscenje-namjestaja',
        'ciscenje-kamenih-povrsina',
        'ciscenje-drvenih-povrsina',
        'detailing-automobila',
        'pranje-bazena',
        'odrzavanje-grobnih-mjesta',
        'poslovni-objekti',
    ];

    const blog: { slug: string; date: string }[] = [
        { slug: 'koliko-kosta-ciscenje-grobnog-mjesta', date: '2026-07-08' },
        { slug: 'koliko-kosta-kemijsko-ciscenje-namjestaja', date: '2026-07-06' },
        { slug: 'uklanjanje-grafita-zagreb', date: '2026-06-16' },
        { slug: 'odrzavanje-fasade-stedi-novac', date: '2026-06-16' },
        { slug: 'crne-fleke-na-fasadi', date: '2026-06-01' },
        { slug: 'korov-izmedju-tlakavaca', date: '2026-06-01' },
        { slug: 'salitra-na-fasadi', date: '2026-06-01' },
        { slug: 'bijela-fasada-posivjela', date: '2026-06-01' },
        { slug: 'kako-oprati-fasadu', date: '2026-06-01' },
        { slug: 'pranje-fasade-stiropor-etics', date: '2026-05-26' },
        { slug: 'ciscenje-fasade-od-algi-i-gljivica', date: '2026-05-25' },
        { slug: 'softwash-ili-visokotlacno-pranje-fasade', date: '2026-05-22' },
        { slug: 'ciscenje-terasa-zagreb', date: '2026-05-18' },
        { slug: 'koliko-kosta-pranje-terase-zagreb', date: '2026-05-15' },
        { slug: 'koliko-kosta-pranje-okucnice-tlakavaca-zagreb', date: '2026-04-21' },
        { slug: 'znakovi-da-fasadi-treba-pranje', date: '2026-04-13' },
        { slug: 'koliko-kosta-pranje-fasade', date: '2026-04-21' },
    ];

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: new Date('2026-05-26'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Service pages
        ...services.map(slug => ({
            url: `${baseUrl}/usluge/${slug}`,
            lastModified: serviceUpdated,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        // About
        {
            url: `${baseUrl}/o-nama`,
            lastModified: new Date('2026-06-01'),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        // Local pages
        ...['zagreb', 'sesvete', 'velika-gorica', 'samobor', 'zapresic', 'sveta-nedelja', 'dugo-selo'].map(slug => ({
            url: `${baseUrl}/podrucje/${slug}`,
            lastModified: new Date('2026-06-01'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        // Blog index
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date('2026-05-26'),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        // Blog posts
        ...blog.map(({ slug, date }) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];
}
