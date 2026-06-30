'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import type { Project } from '@/types';
import ProjectCard from './ProjectCard';
import RevealText from './RevealText';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectHorizontalScroll({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || projects.length < 2) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(min-width: 1024px)', () => {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 72);
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${distance() + window.innerHeight * 0.55}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => setProgress(self.progress)
          }
        });
      });
      return () => media.revert();
    }, section);

    return () => context.revert();
  }, [projects.length]);

  function move(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    if (window.innerWidth >= 1024) {
      const trigger = ScrollTrigger.getAll().find((item) => item.trigger === sectionRef.current);
      if (trigger) {
        const nextProgress = Math.min(1, Math.max(0, progress + direction / Math.max(1, projects.length - 1)));
        window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * nextProgress, behavior: 'smooth' });
      }
      return;
    }
    track.scrollBy({ left: direction * Math.min(430, window.innerWidth * 0.8), behavior: 'smooth' });
  }

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden bg-[#090f22] py-20 lg:h-screen lg:py-0">
      <div className="container flex h-full flex-col justify-center lg:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <RevealText><p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{t('featuredProjects')}</p></RevealText>
            <RevealText delay={0.08}><h2 className="mt-2 font-din text-2xl text-white md:text-[32px]">{t('projectHeading')}</h2></RevealText>
          </div>
          <div className="hidden gap-2 md:flex">
            <button title={t('projectPrev')} onClick={() => move(-1)} className="rounded-full border border-gold/50 p-3 text-gold transition hover:bg-gold hover:text-deepBlue"><ArrowLeft size={19} /></button>
            <button title={t('projectNext')} onClick={() => move(1)} className="rounded-full border border-gold/50 p-3 text-gold transition hover:bg-gold hover:text-deepBlue"><ArrowRight size={19} /></button>
          </div>
        </div>
        <div ref={trackRef} className="mt-9 flex gap-5 overflow-x-auto pb-3 pr-8 lg:overflow-visible">
          {projects.map((project, index) => <ProjectCard key={project._id} project={project} index={index} />)}
          {!projects.length && <p className="py-16 text-white/60">{t('projectsUpdating')}</p>}
        </div>
        {projects.length > 1 && (
          <div className="mt-6 flex items-center gap-2">
            {projects.map((project, index) => (
              <span key={project._id} className={`h-1 rounded-full transition-all ${Math.round(progress * (projects.length - 1)) === index ? 'w-9 bg-gold' : 'w-4 bg-white/20'}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
