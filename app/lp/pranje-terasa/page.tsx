import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
    title: 'Pranje terasa u Zagrebu | Brza procjena',
    description: 'Čišćenje terasa kafića, restorana i obiteljskih kuća. Uklanjamo mrlje od hrane, pića, algi i prljavštine.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function PranjeTerasaLandingPage() {
    return <LandingPageClient />;
}
