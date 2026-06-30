'use client';

import { CircleCheck } from 'lucide-react';
import { useLanguage, type TranslationKey } from '@/lib/i18n';
import RevealText from './RevealText';

type Detail = {
  title: TranslationKey;
  description: TranslationKey;
};

const coreValues: Detail[] = [
  { title: 'coreNationalPride', description: 'coreNationalPrideDesc' },
  { title: 'coreKnowledge', description: 'coreKnowledgeDesc' },
  { title: 'coreHumanity', description: 'coreHumanityDesc' },
  { title: 'coreResponsibleCreativity', description: 'coreResponsibleCreativityDesc' },
  { title: 'coreModernOpen', description: 'coreModernOpenDesc' },
  { title: 'coreLongTerm', description: 'coreLongTermDesc' }
];

const commitments: Detail[] = [
  { title: 'commitmentHeritage', description: 'commitmentHeritageDesc' },
  { title: 'commitmentSociety', description: 'commitmentSocietyDesc' },
  { title: 'commitmentYouth', description: 'commitmentYouthDesc' },
  { title: 'commitmentNation', description: 'commitmentNationDesc' }
];

export default function CoreValuesCommitmentSections() {
  const { t } = useLanguage();

  return (
    <>
      <FeatureSection
        title={t('coreValuesTitle')}
        image="/images/core-values.jpg"
        details={coreValues}
      />

      <FeatureSection
        title={t('commitmentTitle')}
        image="/images/commitment.jpg"
        details={commitments}
      />
    </>
  );
}

function FeatureSection({
  title,
  image,
  details
}: {
  title: string;
  image: string;
  details: Detail[];
}) {
  const { t } = useLanguage();

  return (
    <section className="border-y border-white/35 bg-[#020403] text-white">
      <div className="grid md:min-h-screen md:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden border-b border-white/35 md:min-h-screen md:border-b-0 md:border-r">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={image}
            alt={title}
          />

          <div className="absolute inset-0 bg-black/30" />

          <RevealText className="absolute left-6 top-10 md:left-12 md:top-16 lg:left-20 lg:top-24">
            <h2 className="font-din text-[34px] leading-none text-gold md:text-[48px] lg:text-[56px]">{title}</h2>
          </RevealText>
        </div>

        <div className="flex items-center px-6 py-14 md:px-12 lg:px-20 xl:px-24">
          <div className="w-full max-w-[620px] space-y-7">
            {details.map((item, index) => (
              <RevealText key={item.title} delay={index * 0.08} className="flex items-start gap-4">
                <CircleCheck
                  className="mt-0.5 shrink-0 text-gold"
                  size={22}
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="font-gothamBold text-[16px] text-white md:text-[17px]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-1.5 text-[13px] leading-6 text-white/80 md:text-[14px]">
                    {t(item.description)}
                  </p>
                </div>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
