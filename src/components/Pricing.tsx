'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LayoutGrid, Settings2, Wand2, Plug } from 'lucide-react';

const factors = [
  { icon: LayoutGrid, label: 'Scope & Pages', desc: 'Number of pages, sections, and features required.' },
  { icon: Settings2, label: 'Functionality', desc: 'Static info site vs. booking system vs. full dashboard.' },
  { icon: Wand2, label: 'Design Complexity', desc: 'Custom animations, branding, and UI intricacy.' },
  { icon: Plug, label: 'Integrations', desc: 'Payment gateways, CRMs, third-party APIs, and more.' },
];

export default function Pricing() {
  return (
    <section className="py-28 px-6 md:px-14 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">Pricing</p>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Priced Around You
          </h2>
          <p className="font-sans text-gray text-sm max-w-md mx-auto leading-relaxed">
            We don't do one-size-fits-all packages. Every quote is built around your budget and what your business actually needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {factors.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <f.icon size={20} className="text-violet" strokeWidth={1.5} />
              <span className="font-sans text-xs font-semibold text-white/80">{f.label}</span>
              <span className="font-sans text-[0.65rem] text-gray leading-relaxed">{f.desc}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.04) 100%)', border: '1px solid rgba(124,58,237,0.25)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: '#7C3AED' }} />
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet mb-3 relative z-10">No Surprises</p>
          <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3 relative z-10">
            Tell us your budget.<br />We'll make it work.
          </h3>
          <p className="font-sans text-sm text-gray max-w-sm mx-auto mb-8 leading-relaxed relative z-10">
            Whether you're a small local shop or a growing brand, we'll scope a solution that fits what you can invest — no pressure, no inflated quotes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold rounded-full px-10 py-4 bg-violet text-white hover:bg-violet-light transition-colors duration-300 relative z-10"
            style={{ boxShadow: '0 0 32px rgba(124,58,237,0.35)' }}
          >
            Get a Free Quote →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
