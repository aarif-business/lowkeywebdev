'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-14 lg:px-20" style={{ background: '#0D0D0D' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.05) 100%)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: '#7C3AED' }} />
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-4 relative z-10">Ready?</p>
          <h2 className="font-display font-bold text-white relative z-10 mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Let&apos;s Build Something<br />That Stands Out.
          </h2>
          <p className="font-sans text-gray text-sm max-w-md mx-auto mb-8 relative z-10">
            We&apos;ll build you a free demo website for your business. No commitment, no cost.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest font-semibold rounded-full px-10 py-4 bg-violet text-white hover:bg-violet-light transition-colors duration-300 relative z-10"
            style={{ boxShadow: '0 0 40px rgba(124,58,237,0.4)' }}>
            Get a Free Demo →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
