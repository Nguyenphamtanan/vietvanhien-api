'use client';

import CompanyPageLayout from '@/components/public/CompanyPageLayout';
import { useLanguage, type TranslationKey } from '@/lib/i18n';

const missionDirections: Array<{ title: TranslationKey; description: TranslationKey }> = [
  { title: 'companyMission1Title', description: 'companyMission1Desc' },
  { title: 'companyMission2Title', description: 'companyMission2Desc' },
  { title: 'companyMission3Title', description: 'companyMission3Desc' },
  { title: 'companyMission4Title', description: 'companyMission4Desc' }
];

export default function VisionMissionPage() {
  const { t } = useLanguage();

  return (
    <CompanyPageLayout title={t('companyVisionMissionTitle')} description={t('companyVisionMissionDescription')}>
      <div className="space-y-10">
        <article className="rounded-lg border border-gold/30 bg-burgundy/25 p-8">
          <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{t('companyStrategicVision')}</p>
          <div className="mt-5 grid gap-5 text-sm leading-7 text-white/78 md:grid-cols-2 md:text-[16px]">
            <p>{t('companyVisionP1')}</p>
            <p>{t('companyVisionP2')}</p>
          </div>
        </article>

        <div>
          <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{t('companyMissionDirections')}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {missionDirections.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-gold/60">
                <span className="font-din text-3xl text-gold/90">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="mt-5 font-din text-xl leading-tight text-white">{t(item.title)}</h2>
                <p className="mt-4 text-sm leading-7 text-white/75">{t(item.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </CompanyPageLayout>
  );
}
