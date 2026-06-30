'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { resolveAssetUrl } from '@/lib/api';
import { useLanguage } from '@/lib/i18n';
import type { Project } from '@/types';
import RevealText from './RevealText';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const statusLabel = project.status === 'completed' ? t('projectCompleted') : project.status === 'planning' ? t('projectPlanning') : t('projectActive');

  return (
    <Link href={`/projects/${project._id}`} className="group relative flex h-full min-h-[510px] w-[min(84vw,500px)] shrink-0 flex-col overflow-hidden rounded-lg border border-gold/35 bg-[#0a132a]">
      <div className="absolute right-5 top-5 z-10 flex items-center gap-4">
        <span className="rounded border border-gold/55 bg-burgundy/80 px-3 py-2 font-din text-xl text-[#ffe09a]">{String(index + 1).padStart(2, '0')}</span>
        <span className="rounded-full border border-gold/30 bg-[#08142d]/85 px-3 py-1.5 font-din text-[11px] uppercase tracking-[0.1em] text-gold">{statusLabel}</span>
      </div>
      <div className="h-[250px] overflow-hidden bg-deepBlue">
        {project.image ? (
          <img className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" src={resolveAssetUrl(project.image)} alt={project.title} />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,#0F2042,#800020)]" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <RevealText><p className="font-din text-[12px] uppercase tracking-[0.14em] text-gold">{project.location} {project.year ? `- ${project.year}` : ''}</p></RevealText>
        <RevealText delay={0.08}><h3 className="mt-3 font-din text-xl leading-tight text-white">{project.title}</h3></RevealText>
        <RevealText delay={0.16}><p className="mt-3 line-clamp-3 text-sm leading-6 text-white/75">{project.description}</p></RevealText>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-din text-sm text-gold transition group-hover:text-white">
          {t('viewDetails')}
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
