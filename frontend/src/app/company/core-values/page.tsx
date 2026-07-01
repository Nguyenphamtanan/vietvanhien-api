'use client';

import CompanyPageLayout from '@/components/public/CompanyPageLayout';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const values: Array<{ title: TranslationKey; description: TranslationKey }> = [
  { title: 'companyCoreValue1Title', description: 'companyCoreValue1Desc' },
  { title: 'companyCoreValue2Title', description: 'companyCoreValue2Desc' },
  { title: 'companyCoreValue3Title', description: 'companyCoreValue3Desc' },
  { title: 'companyCoreValue4Title', description: 'companyCoreValue4Desc' },
  { title: 'companyCoreValue5Title', description: 'companyCoreValue5Desc' },
  { title: 'companyCoreValue6Title', description: 'companyCoreValue6Desc' }
];

export default function CoreValuesPage() {
  const { t } = useLanguage();

  return (
    <CompanyPageLayout title={t('companyCoreValuesTitle')} description={t('companyCoreValuesDescription')}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <article key={value.title} className="min-h-56 rounded-lg border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-gold/60">
            <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{String(index + 1).padStart(2, '0')}</p>
            <h2 className="mt-6 font-din text-xl leading-tight text-white">{t(value.title)}</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">{t(value.description)}</p>
          </article>
        ))}
      </div>
    </CompanyPageLayout>
  );
}
