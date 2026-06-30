import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { resolveAssetUrl } from '@/lib/api';
import type { Project } from '@/types';

export default function ProjectListCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project._id}`} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-gold/70">
      {project.image && <img className="h-60 w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" src={resolveAssetUrl(project.image)} alt={project.title} />}
      <div className="p-6">
        <p className="flex items-center gap-2 font-din text-[12px] uppercase tracking-[0.14em] text-gold"><MapPin size={14} />{project.location} {project.year ? `- ${project.year}` : ''}</p>
        <h2 className="mt-3 font-din text-2xl text-white">{project.title}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/75">{project.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-din text-sm text-gold">Xem chi tiết <ArrowUpRight size={16} /></span>
      </div>
    </Link>
  );
}
