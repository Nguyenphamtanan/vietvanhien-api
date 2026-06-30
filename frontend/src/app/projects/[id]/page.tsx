import { CalendarDays, MapPin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicFooter from '@/components/public/PublicFooter';
import PublicNavbar from '@/components/public/PublicNavbar';
import ProjectListCard from '@/components/public/ProjectListCard';
import request, { getImageUrl } from '@/lib/api';
import type { Project } from '@/types';

const statusLabels: Record<Project['status'], string> = {
  planning: 'Sắp triển khai',
  active: 'Đang triển khai',
  completed: 'Đã hoàn thành'
};

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = await request<Project>(`/projects/${params.id}`).catch(() => null);
  if (!project) notFound();

  const projects = await request<Project[]>('/projects').catch(() => []);
  const others = projects.filter((item) => item._id !== project._id).slice(0, 3);

  return (
    <div className="public-shell min-h-screen font-gotham text-white">
      <PublicNavbar />
      <main className="pt-20">
        <div className="bg-[#09152d]">
          <div className="mx-auto w-[min(1280px,calc(100%-40px))] py-7 text-[15px] text-white/70 md:py-8">
            <Link className="transition hover:text-gold" href="/">Trang chủ</Link><span className="mx-2">/</span><Link className="transition hover:text-gold" href="/projects">Dự án</Link><span className="mx-2">/</span><span className="text-gold">{project.title}</span>
          </div>
        </div>

        <article>
          <section className="bg-[linear-gradient(120deg,#0F2042,#09152D_55%,#550016_130%)]">
            <div className="mx-auto grid w-[min(1280px,calc(100%-40px))] gap-9 py-10 md:gap-14 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:py-[72px]">
            <div className="flex flex-col justify-center">
              <p className="font-din text-[13px] uppercase tracking-[0.22em] text-gold">DỰ ÁN</p>
              <h1 className="mt-5 font-gothamBold text-[30px] leading-[1.12] text-white md:text-[38px] lg:text-[48px]">{project.title}</h1>
              <div className="mt-6 flex flex-wrap gap-3 text-[14px] text-white/75"><span className="inline-flex items-center gap-2"><MapPin size={16} className="text-gold" />{project.location || 'Đang cập nhật'}</span><span className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-gold" />{project.year || 'Đang cập nhật'}</span><span className="rounded-full border border-gold/60 px-3 py-1 font-din text-[12px] uppercase text-white">{statusLabels[project.status]}</span></div>
              <p className="mt-8 text-[16px] leading-[1.6] text-white/80 md:text-[18px]">{project.description}</p>
              <div className="mt-8 h-1 w-40 bg-gold" />
            </div>
            <img className="min-h-[280px] w-full rounded-xl object-cover md:min-h-[420px]" src={getImageUrl(project.image)} alt={project.title} />
            </div>
          </section>

          <section className="bg-deepBlue py-14 md:py-[72px] md:pb-24">
            <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-8 md:grid-cols-[180px_1fr] md:gap-12">
              <div><div className="mt-3 h-1 w-40 bg-gold" /></div>
              <div className="space-y-10"><div className="text-[16px] leading-[1.75] text-white/[0.86] md:text-[18px] md:leading-[1.9]"><p>{project.description}</p>{project.image && <img className="my-10 w-full max-w-[920px] rounded-[14px] border border-gold/25" src={getImageUrl(project.image)} alt={project.title} />}</div><aside className="max-w-md border-l-4 border-gold bg-white/[0.04] p-6"><h2 className="font-din text-xl text-gold">THÔNG TIN DỰ ÁN</h2><dl className="mt-5 space-y-4 text-[15px] text-white/70"><div><dt>Địa điểm</dt><dd className="mt-1 text-white">{project.location || 'Đang cập nhật'}</dd></div><div><dt>Năm</dt><dd className="mt-1 text-white">{project.year || 'Đang cập nhật'}</dd></div><div><dt>Trạng thái</dt><dd className="mt-1 text-white">{statusLabels[project.status]}</dd></div></dl></aside></div>
            </div>
          </section>
        </article>

        {others.length > 0 && (
          <section className="bg-[#071126] py-14 md:py-20"><div className="container"><h2 className="font-din text-3xl text-white">DỰ ÁN LIÊN QUAN</h2><div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{others.map((item) => <ProjectListCard key={item._id} project={item} />)}</div></div></section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}
