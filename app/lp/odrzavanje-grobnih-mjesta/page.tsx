import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
    title: 'Čišćenje Grobnog Mjesta Zagreb | Brza rezervacija',
    description: 'Profesionalno čišćenje i održavanje grobnih mjesta u Zagrebu. Mirogoj, Miroševac, Markovo Polje, Brestje. Ne trebate biti prisutni, šaljemo fotografije.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function OdrzavanjeGrobnihMjestaLandingPage() {
    return <LandingPageClient />;
}
