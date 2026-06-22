'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Vercel', 'Nodemailer'];

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-24">
      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-4">About Us</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-display font-bold text-white leading-tight mb-8" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Born in Hyderabad.<br />
              <span className="text-violet">Built for the World.</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-5 max-w-2xl">
            <p className="font-sans text-gray leading-[1.9] text-sm">Low Key WebDev is a young, creative web development studio from Hyderabad. We specialize in building custom websites, reservation systems, and admin dashboards — primarily for restaurants, cafes, and hospitality businesses.</p>
            <p className="font-sans text-gray leading-[1.9] text-sm">We don&apos;t believe in cookie-cutter templates or generic solutions. Every project we take on is built from scratch, designed specifically for your brand, and delivered with the kind of attention to detail that makes a real difference.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-14 lg:px-20" style={{ background: '#0D0D0D' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-l-2 pl-8" style={{ borderColor: '#7C3AED' }}>
            <p className="font-display text-white italic leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 300 }}>
              &quot;Our mission is simple — make every local business look as premium as the big brands, without the big brand price tag.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-14 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-8">Tech Stack</p>
          </motion.div>
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
