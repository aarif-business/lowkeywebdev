'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xbdvjdgd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', business: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-transparent border-b py-3 font-sans text-sm text-white placeholder:text-gray focus:outline-none transition-colors duration-300 focus:border-violet";
  const labelClass = "block font-sans text-[0.6rem] uppercase tracking-[0.2em] mb-1";

  return (
    <main className="bg-black min-h-screen pt-24">
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-violet block mb-3">Contact</span>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Let's Build Together
            </h1>
            <p className="font-sans text-sm text-gray leading-relaxed">
              Tell us about your business and we'll get back to you within 24 hours with a free demo proposal.
            </p>
          </motion.div>

          {/* WhatsApp Button */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            href="https://wa.me/918008510757?text=Hi, I'm interested in a website for my business."
            target="_blank"
            className="flex items-center gap-3 w-full rounded-2xl px-6 py-4 mb-8 font-sans text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366' }}
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            Chat on WhatsApp Instead
          </motion.a>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl px-8 py-10 text-center"
              style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}
            >
              <p className="font-display text-white text-2xl mb-2">Message Received 🎉</p>
              <p className="font-sans text-sm text-gray">We'll reach out within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              <div>
                <label className={labelClass} style={{ color: 'rgba(160,160,160,0.6)' }}>Your Name *</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <label className={labelClass} style={{ color: 'rgba(160,160,160,0.6)' }}>Business Name *</label>
                <input name="business" required value={form.business} onChange={handleChange} placeholder="Your Cafe / Restaurant" className={inputClass} style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <label className={labelClass} style={{ color: 'rgba(160,160,160,0.6)' }}>Email *</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <label className={labelClass} style={{ color: 'rgba(160,160,160,0.6)' }}>Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <label className={labelClass} style={{ color: 'rgba(160,160,160,0.6)' }}>Message *</label>
                <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your business and what you need..." className={`${inputClass} resize-none`} style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }} />
              </div>

              {status === 'error' && (
                <p className="font-sans text-xs text-red-400">Something went wrong. Please try WhatsApp or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="self-start font-sans text-xs uppercase tracking-widest font-semibold rounded-full px-8 py-4 bg-violet text-white hover:bg-violet-light transition-all duration-300 disabled:opacity-50"
                style={{ boxShadow: '0 0 28px rgba(124,58,237,0.3)' }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </motion.form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
