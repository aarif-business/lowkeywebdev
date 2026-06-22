'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    name: 'Habitat Cafe',
    desc: 'Full rooftop cafe website with animated hero, interactive menu carousels, online reservation system, admin dashboard with analytics, and automated email notifications to customers.',
    tags: ['Next.js', 'Supabase', 'Framer Motion', 'Nodemailer', 'Tailwind CSS'],
    link: 'https://thehabitatcafe.vercel.app',
    featured: true,
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 px-6 md:px-14 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">Our Work</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Featured Projects</h2>
        </motion.div>

        {projects.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.65 }}
            className="rounded-2xl p-8 md:p-10 flex flex-col gap-6" style={{ background: '#111111', border: '1px solid rgba(124,58,237,0.25)' }}>
            {p.featured && (
              <span className="self-start font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: 'rgba(124,58,237,0.15)', color: '#9B6DFF', border: '1px solid rgba(124,58,237,0.3)' }}>
                Featured Project
              </span>
            )}
            <div>
              <h3 className="font-display font-bold text-white text-2xl mb-2">{p.name}</h3>
              <p className="font-sans text-sm text-gray leading-relaxed max-w-2xl">{p.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(249,249,249,0.5)' }}>{t}</span>
              ))}
            </div>
            <Link href={p.link} target="_blank" className="self-start font-sans text-xs uppercase tracking-widest font-semibold rounded-full px-6 py-2.5 bg-violet text-white hover:bg-violet-light transition-colors duration-300">
              View Live Site →
            </Link>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-6 rounded-2xl p-8 flex items-center justify-center text-center" style={{ background: '#111111', border: '1px dashed rgba(255,255,255,0.08)' }}>
          <div>
            <p className="font-display text-white text-lg mb-1">Your Business Could Be Next</p>
            <p className="font-sans text-sm text-gray">We&apos;re actively taking on new projects.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
