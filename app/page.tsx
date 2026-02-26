import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Gallery from '@/components/Gallery/Gallery';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

