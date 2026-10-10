import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://slaufismrk.com';
    // 10. 10. 2026.: izmjene nakon audita (docs/audit-web-2026-10-10.md) na naslovnoj,
    // uslugama, galeriji, područjima i svim člancima
    const updated = new Date('2026-10-10');
    const serviceUpdated = updated;

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
        { slug: 'pranje-vrucom-vodom-ulje-zvakace', date: '2026-10-10' },
        { slug: 'ciscenje-drvene-terase', date: '2026-10-10' },
        { slug: 'obnova-kamene-terase-bez-zamjene-ploca', date: '2026-10-10' },
        { slug: 'salitra-i-kamenac-na-kamenoj-fasadi', date: '2026-10-10' },
        { slug: 'koliko-kosta-ciscenje-grobnog-mjesta', date: '2026-10-10' },
        { slug: 'koliko-kosta-kemijsko-ciscenje-namjestaja', date: '2026-10-10' },
        { slug: 'uklanjanje-grafita-zagreb', date: '2026-10-10' },
        { slug: 'odrzavanje-fasade-stedi-novac', date: '2026-10-10' },
        { slug: 'crne-fleke-na-fasadi', date: '2026-10-10' },
        { slug: 'korov-izmedju-tlakavaca', date: '2026-10-10' },
        { slug: 'salitra-na-fasadi', date: '2026-10-10' },
        { slug: 'bijela-fasada-posivjela', date: '2026-10-10' },
        { slug: 'kako-oprati-fasadu', date: '2026-10-10' },
        { slug: 'pranje-fasade-stiropor-etics', date: '2026-10-10' },
        { slug: 'ciscenje-fasade-od-algi-i-gljivica', date: '2026-10-10' },
        { slug: 'softwash-ili-visokotlacno-pranje-fasade', date: '2026-10-10' },
        { slug: 'ciscenje-terasa-zagreb', date: '2026-10-10' },
        { slug: 'koliko-kosta-pranje-terase-zagreb', date: '2026-10-10' },
        { slug: 'koliko-kosta-pranje-okucnice-tlakavaca-zagreb', date: '2026-10-10' },
        { slug: 'znakovi-da-fasadi-treba-pranje', date: '2026-10-10' },
        { slug: 'koliko-kosta-pranje-fasade', date: '2026-10-10' },
    ];

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: updated,
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
        // Cjenik (NN 101/2026)
        {
            url: `${baseUrl}/cjenik`,
            lastModified: new Date('2026-09-28'),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // About
        {
            url: `${baseUrl}/o-nama`,
            lastModified: new Date('2026-06-01'),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        // Galerija
        {
            url: `${baseUrl}/galerija`,
            lastModified: updated,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        // Local pages
        ...['zagreb', 'sesvete', 'velika-gorica', 'samobor', 'zapresic', 'sveta-nedelja', 'dugo-selo'].map(slug => ({
            url: `${baseUrl}/podrucje/${slug}`,
            lastModified: updated,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        // Blog index
        {
            url: `${baseUrl}/blog`,
            lastModified: updated,
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
