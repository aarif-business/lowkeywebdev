import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-8 pt-10 pb-6 flex flex-col gap-6" style={{ borderTop: '1px solid #1F1F1F' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-display font-bold text-base">
          Low Key <span className="text-violet">WebDev</span>
        </Link>
        <p className="font-sans text-[0.65rem] text-gray text-center">
          Based in Kakinada, India · Available Worldwide
        </p>
        <Link href="/privacy" className="font-sans text-[0.62rem] text-gray hover:text-violet transition-colors">
          Privacy Policy
        </Link>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} className="pt-4 text-center">
        <p className="font-sans text-[0.6rem] text-gray">
          © 2023–2025 Low Key WebDev. All rights reserved. All content, design, code, and branding on this website are the exclusive intellectual property of Low Key WebDev. · Founded 2023
        </p>
      </div>
    </footer>
  );
}
