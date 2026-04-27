import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
    title: 'Pranje fasade u Zagrebu | Brza procjena',
    description: 'Uklanjamo alge, mahovinu, gljivice i crne tragove s fasada. Pošaljite slike fasade i javimo vam okvirnu cijenu.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function PranjeFasadeLandingPage() {
    return <LandingPageClient />;
}
