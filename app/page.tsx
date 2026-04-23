import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import BeforeAfterGallery from '@/components/BeforeAfterGallery/BeforeAfterGallery';
import Services from '@/components/Services/Services';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Gallery from '@/components/Gallery/Gallery';
import Testimonials from '@/components/Testimonials/Testimonials';
import ReferralBanner from '@/components/ReferralBanner/ReferralBanner';
import Contact from '@/components/Contact/Contact';

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
      <BeforeAfterGallery />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Testimonials />
      <ReferralBanner />
      <Contact />
    </>
  );
}
