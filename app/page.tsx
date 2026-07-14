import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';
import WashReveal from '@/components/WashReveal/WashReveal';

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs/WhyChooseUs'));
const BeforeAfterGallery = dynamic(() => import('@/components/BeforeAfterGallery/BeforeAfterGallery'));
const Services = dynamic(() => import('@/components/Services/Services'));
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'));
const ReferralBanner = dynamic(() => import('@/components/ReferralBanner/ReferralBanner'));
const Contact = dynamic(() => import('@/components/Contact/Contact'));

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
    images: [
      {
        url: '/prije-poslje/fasada-poslje.png',
        width: 1200,
        height: 630,
        alt: 'Rezultat profesionalnog pranja fasade u Zagrebu',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WashReveal
        before="/prije-poslje/fasada-prije.jpeg"
        after="/prije-poslje/fasada-poslje.png"
        beforeAlt="Fasada obiteljske kuće prije pranja, alge i sivilo na žbuci, Zagreb"
        afterAlt="Očišćena bijela fasada obiteljske kuće nakon visokotlačnog pranja, Zagreb"
        eyebrow="Stvarni posao, prije i poslije"
        title={
          <>
            Pranje fasade u Zagrebu koje kuću <mark>vrati u prvo stanje</mark>
          </>
        }
        text="Alge, gljivice i gradsko sivilo ne skidaju se bojanjem nego pranjem. Softwash i visokotlačno pranje čiste žbuku do korijena, bez oštećenja završnog sloja fasade."
        points={[
          'Softwash metoda za stiropor i osjetljive fasade',
          'Uklanjanje algi i gljivica do korijena, ne samo površinski',
          'Fotografije prije i poslije uz svaki posao',
          'Besplatna procjena i točna cijena unaprijed',
        ]}
        caption="Pranje fasade obiteljske kuće, Zagreb"
        badgeTitle="Fasada oprana u jednom danu"
        badgeSub="Softwash, bez oštećenja žbuke"
      />
      <WashReveal
        flip
        before="/prije-poslje/terasa-leggiero-prije-1.jpeg"
        after="/prije-poslje/terasa-leggiero-poslje-1.jpeg"
        beforeAlt="Terasa kafića prije čišćenja, mahovina i sive naslage na pločicama, Zagreb"
        afterAlt="Očišćena terasa kafića nakon visokotlačnog pranja pločica, Zagreb"
        eyebrow="Terase i tlakavci"
        title={
          <>
            Čišćenje terasa u Zagrebu: pločice <mark>opet u prvoj boji</mark>
          </>
        }
        text="Terasa kafića uz Family Mall: mahovina, masnoća i sivilo skinuti u jednom jutru, prije otvaranja lokala. Isti postupak radimo na kućnim terasama, tlakavcima i prilazima."
        points={[
          'Dubinsko pranje pločica i fuga bez oštećenja',
          'Uklanjanje mahovine, algi i masnih mrlja',
          'Za lokale radimo prije otvaranja ili nakon zatvaranja',
          'Impregnacija protiv ponovnog prljanja po želji',
        ]}
        caption="Čišćenje terase kafića, Family Mall Zagreb"
        badgeTitle="Terasa oprana prije otvaranja"
        badgeSub="Bez prekida rada lokala"
      />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <Services />
      <Testimonials />
      <ReferralBanner />
      <Contact />
    </>
  );
}
