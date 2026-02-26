import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Gallery from '@/components/Gallery/Gallery';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
