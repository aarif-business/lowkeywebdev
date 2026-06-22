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
  title: 'Low Key WebDev — Custom Websites & Dashboards for Local Businesses',
  description: 'Low Key WebDev builds custom websites, booking systems, admin dashboards, and logo designs for local businesses. Based in Kakinada, India. Available worldwide.',
  alternates: { canonical: 'https://www.lowkeywebdev.com' },
  openGraph: {
    url: 'https://www.lowkeywebdev.com',
    title: 'Low Key WebDev — Custom Websites & Dashboards for Local Businesses',
    description: 'Custom websites, booking systems, admin dashboards, and logo designs. Based in Kakinada, India.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
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
