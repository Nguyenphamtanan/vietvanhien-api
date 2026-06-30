'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { activityFields } from '@/data/activityFields';
import { useLanguage } from '@/lib/i18n';
import RevealText from './RevealText';

const fieldImages = Array.from({ length: 10 }, (_, index) => `/images/fields/research-${index + 1}.jpg`);

export default function ActivityFieldsSection() {
  const { locale, t } = useLanguage();
  const duplicatedFields = [...activityFields, ...activityFields];

  return (
    <section id="fields" className="overflow-hidden bg-[linear-gradient(120deg,#09152D,#0F2042_58%,#550016_145%)] py-16 text-white md:py-20 lg:py-24">
      <div className="mx-auto w-[min(1280px,calc(100%-40px))]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <RevealText>
            <div className="max-w-3xl">
              <p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">{t('activityFieldsEyebrow')}</p>
              <h2 className="mt-3 font-din text-[34px] leading-[1.05] text-white md:text-[44px] lg:text-[52px]">{t('activityFieldsTitle')}</h2>
              <p className="mt-5 text-[15px] leading-7 text-white/75 md:text-[17px] md:leading-8">{t('activityFieldsDescription')}</p>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <Link
              href="/fields"
              className="inline-flex w-max items-center gap-2 rounded-full border border-gold/60 px-5 py-3 font-din text-sm uppercase tracking-[0.1em] text-gold transition hover:bg-gold hover:text-deepBlue"
            >
              {t('viewAllFields')} <ArrowUpRight size={16} />
            </Link>
          </RevealText>
        </div>
      </div>

      <div className="activity-marquee mt-12">
        <div className="activity-marquee-track">
          {duplicatedFields.map((field, index) => (
            <Link
              key={`${field.slug}-${index}`}
              href={`/fields/${field.slug}`}
              className="group relative h-[480px] w-[340px] shrink-0 overflow-hidden rounded-[18px] border border-gold/25 bg-[#08142d] transition hover:-translate-y-1 hover:border-gold/55 md:h-[520px] md:w-[360px]"
            >
              <Image
                src={fieldImages[index % activityFields.length]}
                alt={field.title[locale]}
                fill
                sizes="(min-width: 768px) 360px, 340px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.88),rgba(0,0,0,.35),rgba(0,0,0,.08))] transition duration-500 group-hover:bg-[linear-gradient(to_top,rgba(0,0,0,.93),rgba(0,0,0,.45),rgba(0,0,0,.12))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <span className="font-din text-[32px] leading-none text-gold">{String((index % activityFields.length) + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 line-clamp-4 font-din text-[25px] leading-[1.05] text-white md:text-[28px]">{field.title[locale]}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
