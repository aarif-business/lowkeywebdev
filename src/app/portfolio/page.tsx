'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const projects = [
  {
    name: 'Habitat Cafe',
    desc: 'Full rooftop cafe website with animated frame-player hero, interactive 3D menu carousels, online reservation system, admin dashboard with analytics, and automated email notifications to customers.',
    tags: ['Next.js 15', 'Supabase', 'Framer Motion', 'Nodemailer', 'Tailwind CSS', 'TypeScript'],
    link: 'https://thehabitatcafe.vercel.app',
    type: 'Restaurant & Cafe',
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen pt-24">
      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-4">Our Work</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white mb-14"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Projects We're Proud Of
          </motion.h1>

          <div className="flex flex-col gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                className="rounded-2xl p-8 md:p-10"
                style={{ background: '#111111', border: '1px solid rgba(124,58,237,0.25)' }}
              >
                <span className="font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block" style={{ background: 'rgba(124,58,237,0.12)', color: '#9B6DFF', border: '1px solid rgba(124,58,237,0.2)' }}>
                  {p.type}
                </span>
                <h2 className="font-display font-bold text-white text-2xl mb-3">{p.name}</h2>
                <p className="font-sans text-sm text-gray leading-relaxed max-w-2xl mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(249,249,249,0.45)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={p.link} target="_blank" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold rounded-full px-6 py-2.5 bg-violet text-white hover:bg-violet-light transition-colors">
                  View Live Site →
                </Link>
              </motion.div>
            ))}

            {/* Coming soon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl p-10 text-center"
              style={{ background: '#111111', border: '1px dashed rgba(255,255,255,0.06)' }}
            >
              <p className="font-display text-white text-lg mb-1">More Projects Coming Soon</p>
              <p className="font-sans text-sm text-gray">We're actively building. Check back soon.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
