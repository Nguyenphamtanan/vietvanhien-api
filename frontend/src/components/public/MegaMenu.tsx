'use client';

import Link from 'next/link';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const companyLinks: Array<{ label: TranslationKey; href: string }> = [
  { label: 'companyAbout', href: '/company/about' },
  { label: 'companyVisionMission', href: '/company/vision-mission' },
  { label: 'companyPhilosophy', href: '/company/philosophy' },
  { label: 'companyCoreValues', href: '/company/core-values' },
  { label: 'companyCommitment', href: '/company/commitment' },
  { label: 'activityFieldsMenu', href: '/fields' }
];

export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLanguage();

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
            {t(item.label)}
          </Link>
        ))}
      </div>
    </div>
  );
}
