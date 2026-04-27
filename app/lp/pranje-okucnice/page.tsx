import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
    title: 'Pranje okućnice i prilaza u Zagrebu | Brza procjena',
    description: 'Uklanjamo alge, mahovinu i tamne mrlje s tlakavaca, prilaza i betona. Pošaljite slike i javimo vam okvirnu cijenu.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function PranjeOkucniceLandingPage() {
    return <LandingPageClient />;
}
