'use client';

import { motion } from 'framer-motion';

const reviews = [
  { name: 'Rahul S.', role: 'Restaurant Owner', text: 'They delivered a stunning website in under 2 weeks. Our online reservations went up immediately. Absolutely worth it.' },
  { name: 'Priya M.', role: 'Cafe Owner', text: 'The dashboard they built is so easy to use. I can accept reservations and notify customers in one click. Game changer.' },
  { name: 'Aditya K.', role: 'F&B Entrepreneur', text: 'Professional, fast, and genuinely creative. The website looks better than anything I expected at this price point.' },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-14 lg:px-20" style={{ background: '#0D0D0D' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">Reviews</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>What Clients Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
              className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: '#111111', border: '1px solid #1F1F1F' }}>
              <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <span key={j} className="text-violet text-sm">★</span>)}</div>
              <p className="font-sans text-sm text-gray leading-relaxed italic">&quot;{r.text}&quot;</p>
              <div className="mt-auto pt-4" style={{ borderTop: '1px solid #1F1F1F' }}>
                <p className="font-display font-semibold text-white text-sm">{r.name}</p>
                <p className="font-sans text-xs text-gray mt-0.5">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
