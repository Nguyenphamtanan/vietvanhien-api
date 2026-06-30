import Link from 'next/link';

const companyLinks = [
  { label: 'Chúng tôi là ai', href: '/company/about' },
  { label: 'Tầm nhìn & Sứ mệnh', href: '/company/vision-mission' },
  { label: 'Triết lý hoạt động', href: '/company/philosophy' },
  { label: 'Giá trị cốt lõi', href: '/company/core-values' },
  { label: 'Cam kết', href: '/company/commitment' }
];

export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="w-full rounded-[14px] border border-white/10 bg-deepBlue p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
      <div className="space-y-1">
        {companyLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2.5 font-din text-[14px] uppercase tracking-[0.08em] text-white/75 transition hover:bg-white/5 hover:text-gold"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
