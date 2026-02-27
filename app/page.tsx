import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Gallery from '@/components/Gallery/Gallery';
import ScratchReveal from '@/components/ScratchReveal/ScratchReveal';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <StatsCounter />
      <WhyChooseUs />
      <Gallery />
      <ScratchReveal />
      <Testimonials />
      <Contact />
    </>
  );
}
