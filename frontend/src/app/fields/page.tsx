'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import PublicFooter from '@/components/public/PublicFooter';
import PublicNavbar from '@/components/public/PublicNavbar';
import RevealText from '@/components/public/RevealText';
import { activityFields } from '@/data/activityFields';
import { useLanguage } from '@/lib/i18n';

export default function FieldsPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#09152D] text-white">
      <PublicNavbar />
      <main className="bg-[linear-gradient(120deg,#0F2042,#09152D_58%,#550016_140%)] pt-20">
        <section className="mx-auto w-[min(1280px,calc(100%-40px))] py-20 md:py-24">
          <RevealText>
            <p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">{t('activityFieldsEyebrow')}</p>
            <h1 className="mt-4 font-din text-[40px] leading-[1.05] text-white md:text-[56px]">{t('activityFieldsTitle')}</h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/75 md:text-[17px] md:leading-8">{t('fieldsHeroDescription')}</p>
          </RevealText>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {activityFields.map((field, index) => (
              <Link
                key={field.slug}
                href={`/fields/${field.slug}`}
                className="group flex min-h-[300px] flex-col rounded-[18px] border border-gold/25 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-gold hover:bg-white/[0.075]"
              >
                <span className="font-din text-[26px] text-gold/80">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="mt-8 font-din text-[24px] leading-[1.08] text-white">{field.title[locale]}</h2>
                <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/70">{field.summary[locale]}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-din text-sm uppercase tracking-[0.08em] text-gold transition group-hover:text-white">
                  {t('explore')} <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
