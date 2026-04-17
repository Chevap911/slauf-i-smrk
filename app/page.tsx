import Hero from '@/components/Hero/Hero';
import BeforeAfterGallery from '@/components/BeforeAfterGallery/BeforeAfterGallery';
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
      <BeforeAfterGallery />
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
