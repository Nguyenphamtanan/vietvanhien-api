'use client';

import Link from 'next/link';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const menuLinks: Array<{ label: TranslationKey; href: string }> = [
  { label: 'footerIntro', href: '/#about' },
  { label: 'footerAbout', href: '/company/about' },
  { label: 'footerVisionMission', href: '/company/vision-mission' },
  { label: 'footerPhilosophy', href: '/company/philosophy' },
  { label: 'footerCoreCommitment', href: '/company/core-values' },
  { label: 'footerProjects', href: '/#projects' },
  { label: 'footerNews', href: '/#news' }
];

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591177155193'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/115954378/admin/dashboard/'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCtOPXeBLDl4QEzAIEjIWluQ'
  }
];

export default function PublicFooter() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white text-deepBlue">
      <div className="mx-auto grid max-w-[1180px] gap-5 px-6 pb-7 pt-8 md:grid-cols-[180px_1fr_160px] md:gap-8 lg:grid-cols-[260px_1fr_220px] lg:gap-12">
        <div className="flex justify-center md:justify-center">
          <img className="w-[140px] max-w-full object-contain md:w-[150px] lg:w-[180px]" src="/images/logo-vvh.png" alt="Việt Văn Hiến" />
        </div>
        <nav className="grid content-start justify-items-center gap-1.5 text-center" aria-label="Footer navigation">
          {menuLinks.map((item) => (
            <Link key={item.href} className="font-din text-[16px] font-bold leading-[1.35] tracking-[0.025em] text-deepBlue transition hover:text-gold md:text-[18px]" href={item.href}>
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <div className="grid content-start justify-items-center gap-1 text-[13px] leading-[1.9] text-deepBlue md:justify-items-start md:text-[15px]">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-max transition hover:text-gold"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-[#dadada]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-6 py-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-din text-[13px] tracking-[0.08em] text-deepBlue">{t('aboutEyebrow')}</p>
          <Link className="text-[12px] text-deepBlue transition hover:text-gold" href="/terms">
            {t('terms')}
          </Link>
        </div>
      </div>

      <div className="bg-white">
        <img className="block h-auto w-full" src="/images/slogan-banner.png" alt="Non sông nghìn thuở vững âu vàng" />
      </div>
    </footer>
  );
}
