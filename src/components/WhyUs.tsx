'use client';

import { motion } from 'framer-motion';

const points = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'Most projects delivered within 7–14 days. No endless delays.' },
  { icon: '🛠', title: '100% Custom Built', desc: 'No drag-and-drop builders. Everything is hand-coded for your brand.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at prices that make sense for local businesses.' },
  { icon: '📱', title: 'Mobile First', desc: 'Every website looks flawless on phones, tablets, and desktops.' },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 md:px-14 lg:px-20" style={{ background: '#0D0D0D' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">Why Us</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Why Low Key WebDev?</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }} className="flex flex-col gap-3">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="font-display font-semibold text-white text-base">{p.title}</h3>
              <p className="font-sans text-sm text-gray leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
