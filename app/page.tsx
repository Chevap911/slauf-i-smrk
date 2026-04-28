import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';

const BeforeAfterGallery = dynamic(() => import('@/components/BeforeAfterGallery/BeforeAfterGallery'));
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs/WhyChooseUs'));
const Services = dynamic(() => import('@/components/Services/Services'));
const Gallery = dynamic(() => import('@/components/Gallery/Gallery'));
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
