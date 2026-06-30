'use client';

import ContactForm from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import AboutSection from './AboutSection';
import ActivityFieldsSection from './ActivityFieldsSection';
import CoreValuesCommitmentSections from './CoreValuesCommitmentSections';
import HeroSection from './HeroSection';
import NewsCard from './NewsCard';
import ProjectHorizontalScroll from './ProjectHorizontalScroll';
import PublicFooter from './PublicFooter';
import PublicNavbar from './PublicNavbar';
import SectionHeading from './SectionHeading';
import VisionMissionSection from './VisionMissionSection';
import RevealText from './RevealText';
import { useLanguage, type TranslationKey } from '@/lib/i18n';
import type { NewsEvent, Partner, Project, SiteSetting } from '@/types';

type Props = {
  site: SiteSetting | null;
  projects: Project[];
  newsEvents: NewsEvent[];
  partners: Partner[];
};

const philosophyCards: Array<[TranslationKey, TranslationKey]> = [
  ['philosophyTradition', 'philosophyTraditionDesc'],
  ['philosophyModernity', 'philosophyModernityDesc'],
  ['philosophyTechnology', 'philosophyTechnologyDesc'],
  ['philosophyEntertainment', 'philosophyEntertainmentDesc'],
  ['philosophyCreativity', 'philosophyCreativityDesc']
];

export default function PublicLanding({ site, projects, newsEvents, partners }: Props) {
  const { t } = useLanguage();

  return (
    <div className="public-shell min-h-screen font-gotham text-white">
      <PublicNavbar />
      <main>
        <HeroSection />

        <AboutSection />

        <VisionMissionSection />

        <section className="bg-deepBlue py-16 md:py-20 lg:py-24">
          <RevealText>
            <div className="mx-auto w-[min(1280px,calc(100%-40px))]">
              <p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">{t('philosophyEyebrow')}</p>
              <h2 className="mt-3 font-din text-[36px] leading-[1.05] text-gold md:text-[48px] lg:text-[58px]">{t('philosophyTitle')}</h2>
              <div className="mt-6 h-0.5 w-[78%] bg-gold" />
              <p className="mt-8 max-w-5xl text-[15px] leading-7 text-white md:mt-9 md:text-[18px] md:leading-[1.7]">{t('philosophyText')}</p>
              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {philosophyCards.map(([title, description]) => (
                  <article key={title} className="rounded-[18px] border border-gold/70 bg-white/[0.03] px-5 py-[22px] text-center transition hover:-translate-y-1 hover:border-gold hover:bg-white/[0.06]">
                    <h3 className="font-gothamBold text-[17px] text-white">{t(title)}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/[0.85]">{t(description)}</p>
                  </article>
                ))}
              </div>
              <blockquote className="mx-auto mt-12 max-w-4xl text-center text-[18px] italic leading-[1.5] text-white md:mt-14 md:text-[24px] md:leading-[1.6]">
                {t('philosophyQuote')}
              </blockquote>
            </div>
          </RevealText>
        </section>

        <CoreValuesCommitmentSections />

        <ActivityFieldsSection />

        <ProjectHorizontalScroll projects={projects} />

        <section id="news" className="section bg-[#09152d]">
          <div className="container">
            <SectionHeading eyebrow={t('newsEyebrow')} title={t('newsHeading')} />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {newsEvents.map((item) => <NewsCard key={item._id} item={item} />)}
            </div>
          </div>
        </section>

        <section id="contact" className="section relative overflow-hidden bg-[linear-gradient(120deg,#0F2042,#550016_120%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(212,175,55,.22),transparent_27rem)]" />
          <div className="container relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <RevealText>
              <div>
                <p className="font-din text-[34px] leading-none text-gold md:text-[44px]">{t('contactHeading')}</p>
                <p className="mt-5 font-gothamBook text-[16px] text-white">{t('contactCompany')}</p>
                <div className="mt-4 space-y-2 text-sm leading-5 text-[#d7dce5] md:text-[15px]">
                  <p className="flex items-start gap-3"><MapPin className="mt-0.5 shrink-0 text-gold" size={17} />{t('contactAddress')}</p>
                  <p className="flex items-center gap-3"><Mail className="shrink-0 text-gold" size={17} />contact@vietvanhien.com</p>
                  <p className="flex items-center gap-3"><Phone className="shrink-0 text-gold" size={17} />899 199 799</p>
                </div>
              </div>
            </RevealText>
            <ContactForm />
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

