'use client';

import { motion } from 'framer-motion';
import { Paintbrush, PenTool, LayoutDashboard, CalendarCheck, Rocket } from 'lucide-react';

const services = [
  { icon: Paintbrush, title: 'Website Design', desc: 'Stunning, modern websites tailored to your brand. Every pixel is intentional.' },
  { icon: PenTool, title: 'Logo Design', desc: 'Custom logo design that captures your brand identity and stands out.' },
  { icon: LayoutDashboard, title: 'Admin Dashboards', desc: 'Custom dashboards to manage your business — reservations, orders, analytics.' },
  { icon: CalendarCheck, title: 'Booking Systems', desc: 'Seamless online reservation and booking systems that reduce phone calls.' },
  { icon: Rocket, title: 'SEO & Deployment', desc: 'Optimized for search engines and deployed on the fastest infrastructure.' },
];

export default function Services() {
  return (
    <section className="py-28 px-6 md:px-14 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">What We Do</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Services That Deliver</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:border-violet"
              style={{ background: '#111111', border: '1px solid #1F1F1F' }}
            >
              <s.icon size={24} className="text-violet" strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-white text-xl">{s.title}</h3>
              <p className="font-sans text-sm text-gray leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
