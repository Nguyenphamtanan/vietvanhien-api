'use client';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import PublicFooter from '@/components/public/PublicFooter';
import PublicNavbar from '@/components/public/PublicNavbar';
import RevealText from '@/components/public/RevealText';
import { getActivityField, getRelatedActivityFields } from '@/data/activityFields';
import { useLanguage } from '@/lib/i18n';

export default function FieldDetailPage() {
  const params = useParams<{ slug: string }>();
  const { locale, t } = useLanguage();
  const field = getActivityField(params.slug);

  if (!field) {
    notFound();
  }

  const relatedFields = getRelatedActivityFields(field.slug, 3);

  return (
    <div className="min-h-screen bg-[#09152D] text-white">
      <PublicNavbar />
      <main className="bg-[linear-gradient(120deg,#0F2042,#09152D_58%,#550016_140%)] pt-20">
        <section className="mx-auto grid w-[min(1280px,calc(100%-40px))] gap-12 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <RevealText>
            <nav className="text-sm text-white/65" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-gold">{t('home')}</Link>
              <span className="mx-3 text-white/35">/</span>
              <Link href="/fields" className="transition hover:text-gold">{t('activityFieldsTitle')}</Link>
              <span className="mx-3 text-white/35">/</span>
              <span className="text-gold">{field.title[locale]}</span>
            </nav>
            <p className="mt-10 inline-flex rounded-full border border-gold/40 px-4 py-2 font-din text-[12px] uppercase tracking-[0.16em] text-gold">{t('fieldCategory')}</p>
            <h1 className="mt-6 font-din text-[34px] leading-[1.05] text-white md:text-[50px]">{field.title[locale]}</h1>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-white/78 md:text-[18px]">{field.summary[locale]}</p>
          </RevealText>

          <RevealText delay={0.12}>
            <div className="rounded-[22px] border border-gold/25 bg-white/[0.045] p-7 shadow-[0_26px_80px_rgba(0,0,0,.26)]">
              <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{t('activityFieldsEyebrow')}</p>
              <p className="mt-4 text-[15px] leading-7 text-white/72">{t('activityFieldsDescription')}</p>
            </div>
          </RevealText>
        </section>

        <section className="bg-[#0F2042] py-16 md:py-20">
          <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 md:grid-cols-[160px_1fr]">
            <div className="h-1 w-32 bg-gold md:mt-4" />
            <div className="space-y-10">
              {field.sections.map((section) => (
                <RevealText key={section.heading.vi}>
                  <section>
                    <h2 className="font-din text-[26px] uppercase tracking-[0.04em] text-gold">{section.heading[locale]}</h2>
                    <p className="mt-4 text-[16px] leading-8 text-white/80">{section.body[locale]}</p>
                  </section>
                </RevealText>
              ))}

              <Link
                href="/fields"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-3 font-din text-sm uppercase tracking-[0.1em] text-gold transition hover:bg-gold hover:text-deepBlue"
              >
                <ArrowLeft size={16} /> {t('backToAllFields')}
              </Link>
            </div>
          </div>
        </section>

        {!!relatedFields.length && (
          <section className="bg-[#071126] py-16 md:py-20">
            <div className="mx-auto w-[min(1280px,calc(100%-40px))]">
              <RevealText>
                <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{t('activityFieldsEyebrow')}</p>
                <h2 className="mt-3 font-din text-[32px] text-white">{t('relatedFields')}</h2>
              </RevealText>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {relatedFields.map((item) => (
                  <Link key={item.slug} href={`/fields/${item.slug}`} className="group rounded-[18px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-gold/60">
                    <h3 className="font-din text-[22px] leading-tight text-white">{item.title[locale]}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/70">{item.summary[locale]}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-din text-sm uppercase tracking-[0.08em] text-gold">{t('explore')} <ArrowUpRight size={15} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}
