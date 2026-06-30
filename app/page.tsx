import Hero from '@/components/Hero';
import ManifestAbout from '@/components/ManifestAbout';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ManifestAbout />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
