import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
