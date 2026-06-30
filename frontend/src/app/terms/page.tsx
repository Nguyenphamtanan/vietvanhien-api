'use client';

import Link from 'next/link';
import PublicFooter from '@/components/public/PublicFooter';
import PublicNavbar from '@/components/public/PublicNavbar';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const sections: Array<{ title: TranslationKey; content: TranslationKey }> = [
  { title: 'termsScope', content: 'termsScopeText' },
  { title: 'termsOwnership', content: 'termsOwnershipText' },
  { title: 'termsResponsibility', content: 'termsResponsibilityText' },
  { title: 'termsContactInfo', content: 'termsContactInfoText' }
];

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0F2042] text-white">
      <PublicNavbar />
      <main className="bg-[linear-gradient(120deg,#0F2042,#09152D_58%,#550016_140%)] pt-20">
        <div className="mx-auto max-w-[960px] px-6 py-24 md:py-28">
          <nav className="font-gotham text-sm text-white/65" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-gold">
              {t('home')}
            </Link>
            <span className="mx-3 text-white/35">/</span>
            <span className="text-gold">{t('terms')}</span>
          </nav>

          <header className="mt-10 border-b border-gold/30 pb-8">
            <p className="font-din text-[13px] uppercase tracking-[0.22em] text-gold">{t('aboutEyebrow')}</p>
            <h1 className="mt-4 font-din text-[40px] uppercase leading-tight tracking-[0.04em] text-white md:text-[52px]">
              {t('termsTitle')}
            </h1>
          </header>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-din text-[24px] uppercase tracking-[0.04em] text-gold md:text-[28px]">{t(section.title)}</h2>
                <p className="mt-4 font-gotham text-[15px] leading-8 text-white/80 md:text-[16px]">{t(section.content)}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
