import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lowkeywebdev.com'),
  title: {
    default: 'Low Key WebDev — We Build Different.',
    template: '%s | Low Key WebDev',
  },
  description: 'Low Key WebDev is a boutique web studio based in Kakinada, India. We build custom websites, admin dashboards, booking systems, and logo designs for local businesses and brands worldwide.',
  keywords: [
    'web development Kakinada',
    'web development India',
    'custom website design India',
    'restaurant website design',
    'Next.js developer India',
    'affordable web development',
    'logo design India',
    'admin dashboard development',
    'booking system website',
    'Low Key WebDev',
    'web design Andhra Pradesh',
    'freelance web developer India',
    'business website Kakinada',
  ],
  authors: [{ name: 'Low Key WebDev', url: 'https://www.lowkeywebdev.com' }],
  creator: 'Low Key WebDev',
  publisher: 'Low Key WebDev',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.lowkeywebdev.com',
    siteName: 'Low Key WebDev',
    title: 'Low Key WebDev — We Build Different.',
    description: 'Custom websites, dashboards & digital experiences for local businesses and brands. Based in Kakinada, India. Available worldwide.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Low Key WebDev — We Build Different.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Low Key WebDev — We Build Different.',
    description: 'Custom websites, dashboards & digital experiences for local businesses. Based in Kakinada, India.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.lowkeywebdev.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'add-your-google-search-console-verification-code-here',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Low Key WebDev',
  url: 'https://www.lowkeywebdev.com',
  logo: 'https://www.lowkeywebdev.com/og-image.png',
  description: 'Custom website design, admin dashboards, booking systems, and logo design for local businesses and brands worldwide.',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kakinada',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8008510757',
    contactType: 'customer service',
    email: 'lowkeylabswebdev@gmail.com',
    availableLanguage: 'English',
  },
  sameAs: [],
  areaServed: 'Worldwide',
  serviceType: ['Web Development', 'Logo Design', 'Admin Dashboard', 'Booking System', 'SEO'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
