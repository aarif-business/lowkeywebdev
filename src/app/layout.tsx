import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: { default: 'Low Key WebDev — We Build Different.', template: '%s | Low Key WebDev' },
  description: 'Custom websites, dashboards & digital experiences for restaurants, cafes and local businesses. Based in Hyderabad, India.',
  keywords: ['web development Hyderabad', 'restaurant website', 'custom website design', 'Next.js developer India', 'Low Key WebDev'],
  authors: [{ name: 'Low Key WebDev' }],
  openGraph: {
    type: 'website',
    siteName: 'Low Key WebDev',
    title: 'Low Key WebDev — We Build Different.',
    description: 'Custom websites, dashboards & digital experiences for restaurants, cafes and local businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
