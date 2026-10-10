import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import ContactCta from '@/components/HomeSections/ContactCta';
import ProcessSteps from '@/components/HomeSections/ProcessSteps';
import ProofPairs from '@/components/HomeSections/ProofPairs';
import ReviewsBlock from '@/components/HomeSections/ReviewsBlock';
import ServicesList from '@/components/HomeSections/ServicesList';
import { OG_IMAGE } from '@/lib/seo';

// Title cilja "visokotlačno pranje" (GSC 6 mj.: 385 prikaza, 0 klikova, nijedna stranica
// ga nije imala u titleu). "Pranje fasade zagreb" ostaje stranici /usluge/pranje-fasade.
const TITLE = 'Visokotlačno pranje Zagreb: fasade i okućnice | Šlauf i Šmrk';
const DESCRIPTION =
  'Visokotlačno pranje fasada, okućnica, terasa i tlakavaca u Zagrebu i okolici. Besplatna procjena, 5,0 na Googleu uz 40 recenzija.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://slaufismrk.com',
    images: [OG_IMAGE],
  },
};

// Marko 2026-10-04: naslovna mora biti čista i usmjerena na upit. Maknute su WashReveal
// scroll sekcije, klizač prije/poslije, "Zašto mi", banner za preporuke i forma u tri
// koraka; sad je pet mirnih sekcija s jednom porukom (components/HomeSections).
export default function Home() {
  return (
    <>
      <Hero />
      <ProofPairs />
      <ProcessSteps />
      <ServicesList />
      <ReviewsBlock />
      <ContactCta />
    </>
  );
}
