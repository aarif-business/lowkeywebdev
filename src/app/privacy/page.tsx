import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Low Key WebDev. Learn how we handle your data.',
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you submit the contact form on our website, we collect your name, business name, email address, phone number, and message. This information is used solely to respond to your enquiry.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information you provide only to communicate with you about your project enquiry. We do not sell, rent, or share your personal information with any third parties for marketing purposes.',
  },
  {
    title: 'Data Storage',
    body: 'Contact form submissions are processed through Formspree and delivered to our business email. We do not store your data on our servers beyond what is necessary for communication.',
  },
  {
    title: 'Cookies',
    body: 'Our website does not use tracking cookies or any third-party analytics tools. No personal data is collected passively through your visit.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website — including but not limited to text, design, graphics, code, logos, and branding — is the exclusive intellectual property of Low Key WebDev. Unauthorised reproduction, distribution, or use of any content from this website, in whole or in part, is strictly prohibited without prior written permission.',
  },
  {
    title: 'Ownership Rights',
    body: 'The name "Low Key WebDev", its logo, visual identity, and all associated branding are owned by Low Key WebDev. All rights reserved © 2023–2025 Low Key WebDev.',
  },
  {
    title: 'Third-Party Links',
    body: 'Our website may contain links to third-party services. We are not responsible for the privacy practices or content of those external sites.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated effective date.',
  },
  {
    title: 'Contact',
    body: 'If you have any questions about this privacy policy or how we handle your data, please contact us at lowkeylabswebdev@gmail.com or via WhatsApp at +91 8008510757.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-black min-h-screen pt-24">
      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-4">Legal</p>
          <h1 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Privacy Policy
          </h1>
          <p className="font-sans text-xs text-gray mb-14">Effective date: January 1, 2023 · Last updated: June 2025</p>

          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title} className="flex flex-col gap-2">
                <h2 className="font-display font-semibold text-white text-lg">{s.title}</h2>
                <p className="font-sans text-sm text-gray leading-[1.9]">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="font-sans text-xs text-gray">
              © 2023–2025 Low Key WebDev. All rights reserved. All content, design, and code on this website is the exclusive property of Low Key WebDev and may not be used without written permission.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
