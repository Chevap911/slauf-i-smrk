import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://slaufismrk.com';
    const serviceUpdated = new Date('2026-04-21');
    const blogUpdated = {
        'znakovi-da-fasadi-treba-pranje': new Date('2026-04-13'),
        'koliko-kosta-pranje-fasade': new Date('2026-04-21'),
        'koliko-kosta-pranje-okucnice-tlakavaca-zagreb': new Date('2026-04-21'),
    } as const;

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
    ];

    const blog = [
        'znakovi-da-fasadi-treba-pranje',
        'koliko-kosta-pranje-fasade',
        'koliko-kosta-pranje-okucnice-tlakavaca-zagreb',
    ] as const;

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: serviceUpdated,
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
        // Local pages
        {
            url: `${baseUrl}/podrucje/zagreb`,
            lastModified: serviceUpdated,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // Blog
        {
            url: `${baseUrl}/blog`,
            lastModified: serviceUpdated,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        ...blog.map(slug => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: blogUpdated[slug],
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];
}
