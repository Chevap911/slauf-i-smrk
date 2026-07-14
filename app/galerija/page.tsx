import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery/Gallery';

export const metadata: Metadata = {
    title: 'Galerija radova, pranje fasada i terasa Zagreb | Šlauf i Šmrk',
    description:
        'Fotografije naših radova: pranje fasada, terasa, okućnica i tlakavaca u Zagrebu i okolici. Pravi projekti Ivana i Marka, prije i poslije.',
    alternates: { canonical: '/galerija' },
    openGraph: {
        title: 'Galerija radova, pranje fasada i terasa Zagreb | Šlauf i Šmrk',
        description:
            'Fotografije naših radova: pranje fasada, terasa i okućnica u Zagrebu i okolici.',
        url: 'https://slaufismrk.com/galerija',
        images: [
            {
                url: '/projekti/pranje-fasade-prije-poslije-zagreb.jpeg',
                width: 1200,
                height: 630,
                alt: 'Pranje fasade prije i poslije, Zagreb',
            },
        ],
    },
};

export default function GalerijaPage() {
    return (
        <main>
            <section style={{ paddingTop: 'calc(var(--nav-h) + 3rem)', paddingBottom: '1rem', textAlign: 'center' }}>
                <div className="container">
                    <nav aria-label="Navigacija" style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>
                        <Link href="/">Početna</Link> / <span>Galerija radova</span>
                    </nav>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem' }}>
                        Galerija radova u Zagrebu i okolici
                    </h1>
                    <p style={{ maxWidth: '640px', margin: '0 auto', opacity: 0.85 }}>
                        Pravi projekti Ivana i Marka: pranje fasada, terasa, okućnica i tlakavaca.
                        Kliknite na sliku za povećani prikaz.
                    </p>
                </div>
            </section>

            <Gallery />

            <div style={{ textAlign: 'center', paddingBottom: '4rem' }}>
                <Link href="/#kontakt" className="btn btn-primary">
                    Zatražite besplatnu procjenu
                </Link>
            </div>
        </main>
    );
}
