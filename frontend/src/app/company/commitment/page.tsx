'use client';

import CompanyPageLayout from '@/components/public/CompanyPageLayout';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const commitments: Array<{ title: TranslationKey; description: TranslationKey }> = [
  { title: 'companyCommitment1Title', description: 'companyCommitment1Desc' },
  { title: 'companyCommitment2Title', description: 'companyCommitment2Desc' },
  { title: 'companyCommitment3Title', description: 'companyCommitment3Desc' },
  { title: 'companyCommitment4Title', description: 'companyCommitment4Desc' }
];

export default function CommitmentPage() {
  const { t } = useLanguage();

  return (
    <CompanyPageLayout title={t('companyCommitmentTitle')} description={t('companyCommitmentDescription')}>
      <div className="grid gap-5 md:grid-cols-2">
        {commitments.map((item, index) => (
          <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-gold/60">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="h-1 w-14 bg-gold" />
              <span className="font-din text-3xl text-gold/80">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h2 className="font-din text-xl text-white">{t(item.title)}</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">{t(item.description)}</p>
          </article>
        ))}
      </div>
    </CompanyPageLayout>
  );
}
