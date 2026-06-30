'use client';

import { Award, CircleDot, HeartHandshake, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import RevealText from './RevealText';

const commitmentKeys = [
  {
    icon: Award,
    title: 'aboutItem1Title',
    description: 'aboutItem1Description'
  },
  {
    icon: CircleDot,
    title: 'aboutItem2Title',
    description: 'aboutItem2Description'
  },
  {
    icon: Sparkles,
    title: 'aboutItem3Title',
    description: 'aboutItem3Description'
  },
  {
    icon: HeartHandshake,
    title: 'aboutItem4Title',
    description: 'aboutItem4Description'
  }
] as const;

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#09152d] py-14 md:py-[72px] lg:py-24">
      <div className="mx-auto grid w-[min(1280px,calc(100%-36px))] gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-[72px]">
        <div className="aspect-[16/10] overflow-hidden rounded-[14px] border border-gold/25 bg-deepBlue shadow-[0_20px_50px_rgba(0,0,0,.24)]">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-bg.jpg">
            <source src="https://res.cloudinary.com/dpubhoped/video/upload/v1782798142/hero_h8hkbd.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <RevealText><p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">{t('aboutEyebrow')}</p></RevealText>
          <RevealText delay={0.08}><h2 className="mt-3 font-din text-[34px] leading-[1.05] text-white md:text-[42px] lg:text-[48px]">{t('aboutTitle')}</h2></RevealText>
          <RevealText delay={0.16}><p className="mt-5 text-[15px] leading-7 text-white/[0.86] md:text-[18px] md:leading-[1.7]">{t('aboutText')}</p></RevealText>
          <RevealText delay={0.24}><h3 className="mt-7 font-gothamBold text-[17px] text-gold md:text-[18px]">{t('aboutFocus')}</h3></RevealText>
          <div className="mt-5 space-y-[18px]">
            {commitmentKeys.map(({ icon: Icon, title, description }, index) => (
              <RevealText key={title} delay={index * 0.08} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold">
                  <Icon size={14} strokeWidth={1.8} />
                </span>
                <p className="text-sm leading-6 text-white/[0.78] md:text-[15px]">
                  <span className="font-gothamBold text-white">{t(title)} </span>
                  {t(description)}
                </p>
              </RevealText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
