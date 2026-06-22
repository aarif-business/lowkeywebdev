'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pulse-slow pointer-events-none" style={{ background: '#7C3AED' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-10 pulse-slow pointer-events-none" style={{ background: '#9B6DFF', animationDelay: '2s' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-sans uppercase tracking-widest"
          style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', color: '#9B6DFF' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-light animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="font-display font-bold leading-[1.05] text-white mb-6" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            We Build Websites<br />That <span className="text-violet">Hit Different.</span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
          <p className="font-sans text-gray max-w-xl mx-auto leading-relaxed mb-10" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}>
            Custom websites, dashboards & digital experiences for restaurants, cafes and local businesses. No templates. Just results.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/portfolio" className="font-sans text-sm uppercase tracking-widest font-semibold rounded-full px-8 py-3.5 bg-violet text-white hover:bg-violet-light transition-colors duration-300" style={{ boxShadow: '0 0 32px rgba(124,58,237,0.35)' }}>
            See Our Work
          </Link>
          <Link href="/contact" className="font-sans text-sm uppercase tracking-widest font-semibold rounded-full px-8 py-3.5 text-white transition-all duration-300 hover:border-violet" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
            Get a Free Demo
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex items-center justify-center gap-12 mt-20 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {[['Fast', 'Delivery'], ['100%', 'Custom Built'], ['₹₹', 'Affordable']].map(([val, lbl]) => (
            <div key={lbl} className="text-center">
              <p className="font-display font-bold text-white text-xl">{val}</p>
              <p className="font-sans text-[0.65rem] uppercase tracking-widest text-gray mt-0.5">{lbl}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
