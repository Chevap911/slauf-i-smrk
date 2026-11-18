import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://slaufismrk.com';
    // 1.11.2026.: izmjene cijena, radova i SEO sadržaja; datum se ne mijenja pri buildu.
    const updated = new Date('2026-11-01');
    // 16.11.2026.: nova hero fotka i popis usluga na naslovnici, prepisane stranice područja,
    // B2B stranica, grobna mjesta (lista interesa), tlakavci i novi odrađeni poslovi u galeriji.
    // Novi datum dobivaju samo stranice kojima se sadržaj stvarno promijenio.
    const changed = new Date('2026-11-16');
    const changedServices = new Set(['poslovni-objekti', 'odrzavanje-grobnih-mjesta', 'pranje-tlakavaca']);

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
        { slug: 'koliko-kosta-ciscenje-kamenih-povrsina-zagreb', date: '2026-11-01' },
        { slug: 'ciscenje-nadgrobnog-spomenika-svi-sveti', date: '2026-11-01' },
        { slug: 'pranje-vrucom-vodom-ulje-zvakace', date: '2026-10-10' },
        { slug: 'ciscenje-drvene-terase', date: '2026-11-01' },
        { slug: 'obnova-kamene-terase-bez-zamjene-ploca', date: '2026-11-01' },
        { slug: 'salitra-i-kamenac-na-kamenoj-fasadi', date: '2026-11-01' },
        { slug: 'koliko-kosta-ciscenje-grobnog-mjesta', date: '2026-11-01' },
        { slug: 'koliko-kosta-kemijsko-ciscenje-namjestaja', date: '2026-11-01' },
        { slug: 'uklanjanje-grafita-zagreb', date: '2026-10-10' },
        { slug: 'odrzavanje-fasade-stedi-novac', date: '2026-11-01' },
        { slug: 'crne-fleke-na-fasadi', date: '2026-11-01' },
        { slug: 'korov-izmedju-tlakavaca', date: '2026-11-01' },
        { slug: 'salitra-na-fasadi', date: '2026-11-01' },
        { slug: 'bijela-fasada-posivjela', date: '2026-11-01' },
        { slug: 'kako-oprati-fasadu', date: '2026-11-01' },
        { slug: 'pranje-fasade-stiropor-etics', date: '2026-11-01' },
        { slug: 'ciscenje-fasade-od-algi-i-gljivica', date: '2026-11-01' },
        { slug: 'softwash-ili-visokotlacno-pranje-fasade', date: '2026-10-10' },
        { slug: 'ciscenje-terasa-zagreb', date: '2026-10-10' },
        { slug: 'koliko-kosta-pranje-terase-zagreb', date: '2026-11-01' },
        { slug: 'koliko-kosta-pranje-okucnice-tlakavaca-zagreb', date: '2026-11-01' },
        { slug: 'znakovi-da-fasadi-treba-pranje', date: '2026-11-01' },
        { slug: 'koliko-kosta-pranje-fasade', date: '2026-11-01' },
    ];

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: changed,
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Service pages
        ...services.map(slug => ({
            url: `${baseUrl}/usluge/${slug}`,
            lastModified: changedServices.has(slug) ? changed : updated,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        // Cjenik (NN 101/2026)
        {
            url: `${baseUrl}/cjenik`,
            lastModified: updated,
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
            lastModified: changed,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        // Local pages
        ...['zagreb', 'sesvete', 'velika-gorica', 'samobor', 'zapresic', 'sveta-nedelja', 'dugo-selo'].map(slug => ({
            url: `${baseUrl}/podrucje/${slug}`,
            lastModified: changed,
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
