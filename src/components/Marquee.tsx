'use client';

const items = ['Web Design', 'Dashboards', 'SEO', 'Booking Systems', 'E-Commerce', 'Mobile Responsive', 'Fast Delivery', 'Next.js', 'Supabase', 'Tailwind CSS'];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden py-4" style={{ background: 'rgba(124,58,237,0.06)', borderTop: '1px solid rgba(124,58,237,0.15)', borderBottom: '1px solid rgba(124,58,237,0.15)' }}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8 whitespace-nowrap">
            <span className="text-violet text-sm">✦</span>
            <span className="font-sans text-sm font-medium text-gray uppercase tracking-widest">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
