'use client';

import CompanyPageLayout from '@/components/public/CompanyPageLayout';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const paragraphs: TranslationKey[] = ['companyPhilosophyP1', 'companyPhilosophyP2', 'companyPhilosophyP3'];
const points: Array<{ title: TranslationKey; description: TranslationKey }> = [
  { title: 'companyPhilosophyPoint1Title', description: 'companyPhilosophyPoint1Desc' },
  { title: 'companyPhilosophyPoint2Title', description: 'companyPhilosophyPoint2Desc' },
  { title: 'companyPhilosophyPoint3Title', description: 'companyPhilosophyPoint3Desc' }
];

export default function PhilosophyPage() {
  const { t } = useLanguage();

  return (
    <CompanyPageLayout title={t('companyPhilosophyTitle')} description={t('companyPhilosophyDescription')}>
      <div className="space-y-10">
        <div className="grid gap-5 text-sm leading-7 text-white/78 md:grid-cols-3 md:text-[16px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{t(paragraph)}</p>
          ))}
        </div>

        <div className="space-y-5">
          {points.map((point, index) => (
            <article key={point.title} className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-7 transition hover:border-gold/60 md:grid-cols-[90px_1fr] md:items-center">
              <span className="font-din text-3xl text-gold/90">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="font-din text-xl leading-8 text-white md:text-2xl">{t(point.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-white/75 md:text-[15px]">{t(point.description)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </CompanyPageLayout>
  );
}
