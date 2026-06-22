'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0.4)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(124,58,237,0.2)' : '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-lg tracking-tight">
            Low Key <span className="text-violet">WebDev</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-sm transition-colors duration-300 hover:text-violet"
                style={{ color: path === l.href ? '#7C3AED' : 'rgba(249,249,249,0.5)' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="font-sans text-xs uppercase tracking-widest font-semibold rounded-full px-5 py-2.5 bg-violet text-white hover:bg-violet-light transition-colors duration-300"
            >
              Let's Talk →
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.25 }} className="block h-px w-5 bg-white origin-center" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} className="block h-px w-5 bg-white" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.25 }} className="block h-px w-5 bg-white origin-center" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="fixed top-16 left-0 right-0 z-40 px-6 pt-6 pb-8 flex flex-col gap-5 md:hidden"
            style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(124,58,237,0.15)' }}
          >
            {links.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={l.href} className="font-display text-2xl font-light" style={{ color: path === l.href ? '#7C3AED' : '#F9F9F9' }}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Link href="/contact" className="self-start font-sans text-xs uppercase tracking-widest font-semibold rounded-full px-6 py-3 bg-violet text-white mt-2">
              Let's Talk →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
