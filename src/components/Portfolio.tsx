'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
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

export default function Portfolio() {
  return (
    <section className="py-28 px-6 md:px-14 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">Our Work</p>
            <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Featured Projects</h2>
          </div>
          <Link href="/portfolio" className="self-start md:self-auto font-sans text-xs uppercase tracking-widest font-semibold text-violet hover:text-white transition-colors flex items-center gap-1.5">
            View All Work <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65 }}
              className="rounded-2xl p-8 md:p-10 flex flex-col gap-5"
              style={{ background: '#111111', border: '1px solid rgba(124,58,237,0.2)' }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'rgba(124,58,237,0.12)', color: '#9B6DFF', border: '1px solid rgba(124,58,237,0.25)' }}>
                  {p.type}
                </span>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-sans text-xs text-violet hover:text-white transition-colors shrink-0">
                  View Live <ArrowUpRight size={13} />
                </a>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">{p.name}</h3>
                <p className="font-sans text-sm text-gray leading-relaxed max-w-2xl">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(249,249,249,0.5)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-6 rounded-2xl p-8 flex items-center justify-center text-center"
          style={{ background: '#111111', border: '1px dashed rgba(255,255,255,0.08)' }}>
          <div>
            <p className="font-display text-white text-lg mb-1">Your Business Could Be Next</p>
            <p className="font-sans text-sm text-gray">We&apos;re actively taking on new projects.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
