import PublicFooter from '@/components/public/PublicFooter';
import PublicNavbar from '@/components/public/PublicNavbar';
import ProjectListCard from '@/components/public/ProjectListCard';
import request from '@/lib/api';
import type { Project } from '@/types';

export default async function ProjectsPage() {
  const projects = await request<Project[]>('/projects').catch(() => []);

  return (
    <div className="public-shell min-h-screen font-gotham text-white">
      <PublicNavbar />
      <main className="pt-20">
        <section className="border-b border-white/10 bg-[#09152d] py-16 md:py-20">
          <div className="container">
            <p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">Việt Văn Hiến</p>
            <h1 className="mt-3 font-din text-[38px] leading-none text-white md:text-[48px]">DỰ ÁN</h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/75">Những công trình kết nối chiều sâu văn hiến Việt với trải nghiệm đương đại.</p>
          </div>
        </section>
        <section className="bg-deepBlue py-14 md:py-20">
          <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => <ProjectListCard key={project._id} project={project} />)}
            {!projects.length && <p className="text-white/65">Dự án đang được cập nhật.</p>}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
