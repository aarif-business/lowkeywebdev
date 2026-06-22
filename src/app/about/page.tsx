'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Vercel', 'Nodemailer'];

const story = [
  {
    label: 'Where It Started',
    text: 'It started in Kakinada — a city with big ambitions and even bigger potential. Growing up here, I always noticed something: local businesses were doing incredible work, but their online presence never matched the quality of what they actually offered. That gap bothered me.',
  },
  {
    label: 'Founded in 2023',
    text: 'In 2023, Low Key WebDev officially came to life. What started as a personal project to help a local business get online quickly turned into something much bigger — a studio built on the belief that every business, no matter how small, deserves a world-class digital presence.',
  },
  {
    label: 'The Day Job',
    text: 'By day, I work as a full-time developer at a well-known global tech company, building large-scale products used by millions. That experience gave me enterprise-level skills — performance optimization, clean architecture, scalable systems — things most freelancers simply don\'t bring to the table.',
  },
  {
    label: 'Why Low Key WebDev',
    text: 'Low Key WebDev was born from passion, not necessity. I didn\'t start this to replace my career — I started it because I genuinely love building things that help real businesses grow. Every project here is something I choose to take on, which means you get my full attention and best work, every single time.',
  },
  {
    label: 'What Drives Us',
    text: 'There\'s something deeply satisfying about handing a business owner a website and watching their face light up. When a small cafe in Kakinada starts getting online reservations, or a local shop gets their first customer through their website — that\'s the win. That\'s why we do this.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-24">

      {/* Hero */}
      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-4">
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Born in Kakinada.<br />
            <span className="text-violet">Built for the World.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-sans text-gray leading-[1.9] text-sm max-w-2xl"
          >
            Low Key WebDev is a boutique web studio run by a full-time developer with experience at top-tier global tech companies. We build custom websites, dashboards, and digital experiences that make local and growing businesses look world-class.
          </motion.p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-6 md:px-14 lg:px-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-l-2 pl-8" style={{ borderColor: '#7C3AED' }}>
            <p className="font-display text-white italic leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 300 }}>
              &quot;Your business deserves a website built with the same standards as the products used by millions — not a template, not a shortcut.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-12">
            Our Story
          </motion.p>
          <div className="flex flex-col gap-10">
            {story.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col md:flex-row gap-4 md:gap-10"
              >
                <span className="font-sans text-[0.6rem] uppercase tracking-widest text-violet shrink-0 md:w-40 pt-1">{s.label}</span>
                <p className="font-sans text-sm text-gray leading-[1.9]">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-16 px-6 md:px-14 lg:px-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.03) 100%)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <div className="absolute top-0 left-0 w-60 h-60 rounded-full blur-[100px] opacity-10 pointer-events-none" style={{ background: '#7C3AED' }} />
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-4 relative z-10">What Sets Us Apart</p>
            <p className="font-display font-bold text-white text-xl md:text-2xl mb-4 relative z-10">
              Enterprise skills. Startup hustle. Local heart.
            </p>
            <p className="font-sans text-sm text-gray leading-[1.9] max-w-xl relative z-10">
              Most agencies give you a junior developer or an outsourced team. With Low Key WebDev, every line of code is written by a developer who has shipped production software at scale. You get that level of craft — applied directly to your business, at a price that actually makes sense.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-8">
            Tech Stack
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {stack.map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                className="font-sans text-sm px-4 py-2 rounded-full"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#9B6DFF' }}>
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
