import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery/Gallery';
import { OG_IMAGE } from '@/lib/seo';
import QuoteLink from '@/components/QuoteLink/QuoteLink';
import QuoteCard from '@/components/QuoteCard/QuoteCard';

export const metadata: Metadata = {
    title: 'Galerija radova, pranje fasada i terasa Zagreb',
    description:
        'Fotografije prije i poslije: pranje fasada, terasa i okućnica te čišćenje grobova u Zagrebu i okolici. Pravi poslovi Ivana i Marka.',
    alternates: { canonical: '/galerija' },
    openGraph: {
        title: 'Galerija radova, pranje fasada i terasa Zagreb | Šlauf i Šmrk',
        description:
            'Prije i poslije pranja fasada, terasa i grobova u Zagrebu i okolici.',
        url: 'https://slaufismrk.com/galerija',
        images: [OG_IMAGE],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Galerija radova', item: 'https://slaufismrk.com/galerija' },
    ],
};

// <div>, ne <main>: <main> već daje app/layout.tsx, a dva su bila nevaljan HTML
export default function GalerijaPage() {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <section style={{ paddingTop: 'calc(var(--nav-h) + 1.5rem)', paddingBottom: '1rem', textAlign: 'center' }}>
                <div className="container">
                    <nav aria-label="Navigacija" style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>
                        <Link href="/">Početna</Link> / <span>Galerija radova</span>
                    </nav>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem' }}>
                        Galerija radova: pranje fasada i terasa u Zagrebu
                    </h1>
                    <p style={{ maxWidth: '640px', margin: '0 auto', opacity: 0.85 }}>
                        Fotografije s poslova Ivana i Marka u Zagrebu i okolici: fasade, terase, okućnice
                        i grobna mjesta. Kliknite na fotografiju za veći prikaz.
                    </p>
                </div>
            </section>

            {/* Forma odmah nakon parova: tko je vidio rezultat, pita za cijenu. Donji gumb sad
                skrolira do nje (QuoteLink traži id="procjena"), umjesto da otvara modal. */}
            <Gallery
                forma={
                    <QuoteCard
                        title="Želite ovakav rezultat? Pošaljite upit"
                        location="galerija"
                        service=""
                    />
                }
            />

            <div style={{ textAlign: 'center', padding: '0 1rem 4rem', background: 'var(--surface)' }}>
                <QuoteLink className="btn btn-primary">
                    Zatražite besplatnu procjenu
                </QuoteLink>
            </div>
        </div>
    );
}
