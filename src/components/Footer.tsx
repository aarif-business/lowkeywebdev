import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid #1F1F1F' }}>
      <Link href="/" className="font-display font-bold text-base">
        Low Key <span className="text-violet">WebDev</span>
      </Link>
      <p className="font-sans text-[0.65rem] text-gray text-center">
        Based in Hyderabad, India · Available Worldwide
      </p>
      <p className="font-sans text-[0.62rem] text-gray">© 2025 Low Key WebDev</p>
    </footer>
  );
}
