import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import ContactCta from '@/components/HomeSections/ContactCta';
import ProcessSteps from '@/components/HomeSections/ProcessSteps';
import ProofPairs from '@/components/HomeSections/ProofPairs';
import ReviewsBlock from '@/components/HomeSections/ReviewsBlock';
import ServicesList from '@/components/HomeSections/ServicesList';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Pranje fasade, okućnice i terasa Zagreb | Šlauf i Šmrk',
  description:
    'Pranje fasade, čišćenje okućnice, terasa, prilaza i tlakavaca u Zagrebu i okolici. Besplatna procjena i profesionalni rezultati prije i poslije.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pranje fasade, okućnice i terasa Zagreb | Šlauf i Šmrk',
    description:
      'Pranje fasade, čišćenje okućnice, terasa, prilaza i tlakavaca u Zagrebu i okolici.',
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
