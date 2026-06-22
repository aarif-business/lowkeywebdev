import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Low Key WebDev — We Build Different.',
  description: 'Custom websites, dashboards & digital experiences for restaurants, cafes and local businesses. Based in Hyderabad.',
};

export default function HomePage() {
  return (
    <main className="bg-black">
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
