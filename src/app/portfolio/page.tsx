'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, BarChart2, User, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';

const stats = [
  { label: 'Static Websites', count: '22+', desc: 'Landing pages, brochure sites, service pages', icon: Globe },
  { label: 'Dynamic Web Apps', count: '18+', desc: 'CMS-driven sites, booking systems, portals', icon: Zap },
  { label: 'Analytics Dashboards', count: '12+', desc: 'Admin panels, real-time data dashboards', icon: BarChart2 },
  { label: 'Portfolio Sites', count: '10+', desc: 'Personal brands, agencies, creatives', icon: User },
];

const featured = [
  {
    name: "De' Needs Hyper Bazzar",
    type: 'E-Commerce · Dynamic Web App',
    desc: "Full e-commerce supermarket website with animated hero, interactive product catalogue with category filters, shopping cart with slide-out drawer, order placement system, and admin dashboard with inventory & order management.",
    tags: ['Next.js', 'Supabase', 'Framer Motion', 'Zustand', 'Tailwind CSS'],
    link: 'https://de-needs-hypermart.vercel.app/',
  },
  {
    name: 'Records Writing Kakinada',
    type: 'Academic Services · Dynamic Web App',
    desc: 'Full academic & technical services website with animated hero, live price calculator for records/drawings, online service request form with auto-filled student profiles, invoice generation, admin dashboard with visitor analytics, and student loyalty discount system.',
    tags: ['Next.js', 'Supabase', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    link: 'https://recordswritingkakinada.vercel.app/',
  },
  {
    name: 'CryptoPulse',
    type: 'Analytics Dashboard · Dynamic Web App',
    desc: 'Full professional crypto trading terminal with live price tracking, interactive charts with RSI & SMA indicators, Fear & Greed gauge, whale alert feed, profit calculator, price alerts with browser notifications, and Binance affiliate monetization.',
    tags: ['React (Vite)', 'Binance API', 'CoinGecko API', 'Framer Motion', 'Recharts', 'Tailwind CSS'],
    link: 'https://crypto-pulse-rouge-eight.vercel.app/',
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen pt-24">
      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-5xl mx-auto">

          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-4">
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Projects We're Proud Of
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="font-sans text-sm text-gray leading-relaxed mb-16 max-w-xl"
          >
            Over 60 projects delivered across industries — from local businesses to enterprise dashboards.
          </motion.p>

          {/* Total count hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl p-10 md:p-14 text-center mb-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.04) 100%)', border: '1px solid rgba(124,58,237,0.25)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: '#7C3AED' }} />
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-3 relative z-10">Total Delivered</p>
            <p className="font-display font-bold text-white relative z-10" style={{ fontSize: 'clamp(4rem, 12vw, 7rem)', lineHeight: 1 }}>62+</p>
            <p className="font-sans text-sm text-gray mt-3 relative z-10">Websites & web apps successfully shipped</p>
          </motion.div>

          {/* Category breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <s.icon size={20} className="text-violet" strokeWidth={1.5} />
                <span className="font-display font-bold text-white text-4xl">{s.count}</span>
                <span className="font-sans text-xs font-semibold text-white/80">{s.label}</span>
                <span className="font-sans text-[0.65rem] text-gray leading-relaxed">{s.desc}</span>
              </motion.div>
            ))}
          </div>

          {/* Featured Projects */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-6"
          >
            Featured Work
          </motion.p>

          <div className="flex flex-col gap-6 mb-10">
            {featured.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.6 }}
                className="rounded-2xl p-8 md:p-10"
                style={{ background: '#111111', border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className="font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full inline-block"
                    style={{ background: 'rgba(124,58,237,0.12)', color: '#9B6DFF', border: '1px solid rgba(124,58,237,0.25)' }}
                  >
                    {p.type}
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-sans text-xs text-violet hover:text-white transition-colors shrink-0"
                  >
                    View Live <ArrowUpRight size={13} />
                  </a>
                </div>
                <h2 className="font-display font-bold text-white text-2xl mb-3">{p.name}</h2>
                <p className="font-sans text-sm text-gray leading-relaxed max-w-2xl mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(249,249,249,0.45)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA nudge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl p-10 text-center"
            style={{ background: '#111111', border: '1px dashed rgba(255,255,255,0.06)' }}
          >
            <p className="font-display text-white text-lg mb-1">Your Business Could Be Next</p>
            <p className="font-sans text-sm text-gray">We're actively taking on new projects.</p>
          </motion.div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
