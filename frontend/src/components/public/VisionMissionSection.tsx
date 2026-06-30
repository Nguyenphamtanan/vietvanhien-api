'use client';

import { CircleDot, Heart, ShieldCheck, Timer } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { useLanguage } from '@/lib/i18n';
import RevealText from './RevealText';

gsap.registerPlugin(ScrollTrigger);

const visionValues = [
  {
    icon: Heart,
    title: 'visionHumanism',
    description: 'visionHumanismDesc'
  },
  {
    icon: ShieldCheck,
    title: 'visionPride',
    description: 'visionPrideDesc'
  },
  {
    icon: Timer,
    title: 'visionLegacy',
    description: 'visionLegacyDesc'
  }
] as const;

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const vision = visionRef.current;
    const mission = missionRef.current;
    if (!section || !vision || !mission) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(min-width: 1024px)', () => {
        gsap.set(mission, { autoAlpha: 0, y: 24 });
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=1200',
            pin: true,
            scrub: 0.6
          }
        });

        timeline
          .to(vision, { autoAlpha: 0, y: -24, duration: 0.1 }, 0.45)
          .to(mission, { autoAlpha: 1, y: 0, duration: 0.1 }, 0.55);
      });
      return () => media.revert();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-deepBlue py-14 md:py-[72px] lg:h-screen lg:py-0">
      <div className="mx-auto grid w-[min(1280px,calc(100%-36px))] gap-9 lg:h-full lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-[72px]">
        <div className="relative lg:min-h-[520px]">
          <div ref={visionRef} className="lg:absolute lg:inset-0">
            <VisionContent />
          </div>
          <div ref={missionRef} className="mt-12 lg:absolute lg:inset-0 lg:mt-0">
            <MissionContent />
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-[14px] border border-gold/50 bg-[#09152d] shadow-[0_24px_80px_rgba(0,0,0,.35)]">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-bg.jpg">
            <source src="https://res.cloudinary.com/dpubhoped/video/upload/v1782798142/vision-mission_dgra3y.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

function VisionContent() {
  const { t } = useLanguage();

  return (
    <div>
      <RevealText><p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">{t('visionMissionEyebrow')}</p></RevealText>
      <RevealText delay={0.08}><h2 className="mt-3 font-din text-[34px] leading-[1.05] text-white md:text-[42px] lg:text-[46px]">{t('visionTitle')}</h2></RevealText>
      <RevealText delay={0.16}><p className="mt-5 text-[15px] leading-7 text-white/[0.85] md:text-[17px] md:leading-[1.7]">{t('visionText')}</p></RevealText>
      <RevealText delay={0.24}><h3 className="mt-7 font-din text-[17px] leading-7 text-gold md:text-[18px]">{t('visionSubheading')}</h3></RevealText>
      <div className="mt-4">
        {visionValues.map(({ icon: Icon, title, description }, index) => (
          <RevealText key={title} delay={index * 0.08} className={`flex gap-3 py-4 ${index ? 'border-t border-white/[0.12]' : ''}`}>
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold"><Icon size={14} strokeWidth={1.8} /></span>
            <p className="text-sm leading-6 text-white/[0.8] md:text-[15px]"><span className="font-gothamBold text-gold">{t(title)}: </span>{t(description)}</p>
          </RevealText>
        ))}
      </div>
    </div>
  );
}

function MissionContent() {
  const { t } = useLanguage();

  return (
    <div>
      <RevealText><p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">{t('visionMissionEyebrow')}</p></RevealText>
      <RevealText delay={0.08}><h2 className="mt-3 font-din text-[34px] leading-[1.05] text-white md:text-[42px] lg:text-[46px]">{t('missionTitle')}</h2></RevealText>
      <RevealText delay={0.16}><p className="mt-5 text-[15px] leading-7 text-white/[0.85] md:text-[17px] md:leading-[1.7]">{t('missionText')}</p></RevealText>
      <RevealText delay={0.24} className="mt-7 border-l-2 border-gold bg-white/[0.04] px-5 py-5">
        <CircleDot className="mb-4 text-gold" size={18} />
        <p className="text-[15px] leading-7 text-white md:text-[17px] md:leading-[1.7]">{t('missionQuote')}</p>
      </RevealText>
    </div>
  );
}
