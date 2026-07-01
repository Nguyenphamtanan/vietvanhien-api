'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import PublicFooter from './PublicFooter';
import PublicNavbar from './PublicNavbar';

type CompanyPageLayoutProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
};

export default function CompanyPageLayout({ title, eyebrow, description, children }: CompanyPageLayoutProps) {
  const { t } = useLanguage();
  const resolvedEyebrow = eyebrow || t('company');

  return (
    <div className="public-shell min-h-screen font-gotham text-white">
      <PublicNavbar />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(212,175,55,0.16),transparent_24rem)]" />
          <div className="container relative pb-20 pt-12 md:pb-28 md:pt-24">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[13px] text-white/75">
              <Link className="hover:text-gold" href="/">{t('home')}</Link>
              <span>/</span>
              <span>{t('company')}</span>
              <span>/</span>
              <span className="text-gold">{title}</span>
            </div>
            <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{resolvedEyebrow}</p>
            <h1 className="mt-3 max-w-5xl font-din text-[34px] leading-[1.08] text-white md:text-[42px] lg:text-[48px]">{title}</h1>
            {description && <p className="mt-5 max-w-3xl text-sm leading-7 text-[#d7dce5] md:text-[16px]">{description}</p>}
          </div>
        </section>
        <section className="bg-[#0b1833] py-16 md:py-20">
          <div className="container">{children}</div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
