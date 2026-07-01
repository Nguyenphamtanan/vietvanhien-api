'use client';

import CompanyPageLayout from '@/components/public/CompanyPageLayout';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const paragraphs: TranslationKey[] = ['companyAboutP1', 'companyAboutP2', 'companyAboutP3'];
const modelItems: TranslationKey[] = ['companyAboutModel1', 'companyAboutModel2', 'companyAboutModel3'];

export default function CompanyAboutPage() {
  const { t } = useLanguage();

  return (
    <CompanyPageLayout
      title={t('companyAboutTitle')}
      description={t('companyAboutDescription')}
    >
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{t('companyAboutModelTitle')}</p>
          <div className="mt-6 space-y-4">
            {modelItems.map((item, index) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold/60">
                <span className="font-din text-2xl text-gold">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-sm leading-7 text-white/75">{t(item)}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-5 text-sm leading-7 text-white/75 md:text-[16px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{t(paragraph)}</p>
          ))}
        </div>
      </div>
    </CompanyPageLayout>
  );
}
