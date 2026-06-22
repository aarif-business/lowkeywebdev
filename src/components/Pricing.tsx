'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic', price: '₹8,000',
    desc: 'Perfect for small cafes and local businesses getting started online.',
    features: ['Up to 4 pages', 'Mobile responsive', 'Contact form', 'Basic SEO', 'Vercel deployment'],
    highlight: false,
  },
  {
    name: 'Pro', price: '₹18,000',
    desc: 'Best for restaurants that want an online presence with bookings.',
    features: ['Up to 8 pages', 'Reservation system', 'Admin dashboard', 'Email notifications', 'Analytics', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Premium', price: '₹35,000',
    desc: 'Full custom solution for growing hospitality businesses.',
    features: ['Unlimited pages', 'Custom dashboard', 'Payment integration', 'Advanced SEO', 'CMS integration', '3 months support'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-28 px-6 md:px-14 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">Pricing</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Simple, Transparent Pricing</h2>
          <p className="font-sans text-gray text-sm mt-3">No hidden fees. No surprises.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl p-8 flex flex-col gap-6 relative"
              style={{ background: p.highlight ? 'rgba(124,58,237,0.1)' : '#111111', border: p.highlight ? '1px solid rgba(124,58,237,0.5)' : '1px solid #1F1F1F', boxShadow: p.highlight ? '0 0 40px rgba(124,58,237,0.15)' : 'none' }}>
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full bg-violet text-white">Most Popular</span>}
              <div>
                <p className="font-sans text-[0.65rem] uppercase tracking-widest text-violet mb-2">{p.name}</p>
                <p className="font-display font-bold text-white text-4xl">{p.price}</p>
                <p className="font-sans text-xs text-gray mt-1">{p.desc}</p>
              </div>
              <ul className="flex flex-col gap-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="font-sans text-sm text-gray flex items-center gap-2">
                    <span className="text-violet text-xs">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-center font-sans text-xs uppercase tracking-widest font-semibold rounded-full px-6 py-3 transition-all duration-300"
                style={{ background: p.highlight ? '#7C3AED' : 'rgba(255,255,255,0.06)', color: '#F9F9F9', border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
                Get Started →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
