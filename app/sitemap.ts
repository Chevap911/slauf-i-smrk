import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://slaufismrk.com';

    const services = [
        'pranje-fasade',
        'pranje-okucnice',
        'kemijsko-ciscenje-namjestaja',
        'ciscenje-kamenih-povrsina',
        'ciscenje-drvenih-povrsina',
        'detailing-automobila',
        'pranje-bazena',
        'odrzavanje-grobnih-mjesta',
    ];

    const blog = [
        'koliko-kosta-pranje-fasade',
    ];

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Service pages
        ...services.map(slug => ({
            url: `${baseUrl}/usluge/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        // Local pages
        {
            url: `${baseUrl}/podrucje/zagreb`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // Blog
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        ...blog.map(slug => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];
}
