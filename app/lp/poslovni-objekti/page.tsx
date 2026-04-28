import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
    title: 'Vanjsko čišćenje poslovnih objekata Zagreb | Ponuda za firme',
    description: 'Profesionalno vanjsko čišćenje poslovnih objekata u Zagrebu: fasade, parkirišta, skladišta i hale. Redoviti ugovori, R1 račun, rad izvan radnog vremena. Zatražite ponudu.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function PoslovniObjektiLandingPage() {
    return <LandingPageClient />;
}
