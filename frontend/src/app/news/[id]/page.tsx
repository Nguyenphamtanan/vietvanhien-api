import Link from 'next/link';
import { notFound } from 'next/navigation';
import PublicFooter from '@/components/public/PublicFooter';
import PublicNavbar from '@/components/public/PublicNavbar';
import NewsCard from '@/components/public/NewsCard';
import request, { getImageUrl } from '@/lib/api';
import type { NewsEvent } from '@/types';

function formatDate(value: string) {
  return new Intl.DateTimeFormat('vi-VN', { dateStyle: 'long' }).format(new Date(value));
}

function paragraphs(content: string) {
  return content.split(/\n+/).map((paragraph) => paragraph.trim()).filter(Boolean);
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const item = await request<NewsEvent>(`/news-events/${params.id}`).catch(() => null);
  if (!item) notFound();

  const allItems = await request<NewsEvent[]>('/news-events').catch(() => []);
  const related = allItems.filter((newsItem) => newsItem._id !== item._id).slice(0, 3);
  const body = paragraphs(item.content || item.summary);

  return (
    <div className="public-shell min-h-screen font-gotham text-white">
      <PublicNavbar />
      <main className="pt-20">
        <div className="bg-[#09152d]">
          <div className="mx-auto w-[min(1280px,calc(100%-40px))] py-7 text-[15px] text-white/70 md:py-8">
            <Link className="transition hover:text-gold" href="/">Trang chủ</Link><span className="mx-2">/</span><Link className="transition hover:text-gold" href="/news">Tin tức</Link><span className="mx-2">/</span><span className="text-gold">{item.title}</span>
          </div>
        </div>

        <article>
          <section className="bg-[linear-gradient(120deg,#0F2042,#09152D_55%,#550016_130%)]">
            <div className="mx-auto grid w-[min(1280px,calc(100%-40px))] gap-9 py-10 md:gap-14 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:py-[72px]">
            <div className="flex flex-col justify-center">
              <p className="font-din text-[13px] uppercase tracking-[0.22em] text-gold">{item.type === 'event' ? 'SỰ KIỆN' : 'TIN TỨC'}</p>
              <h1 className="mt-5 font-gothamBold text-[30px] leading-[1.12] text-white md:text-[38px] lg:text-[48px]">{item.title}</h1>
              <p className="mt-6 text-[15px] text-white/60">{formatDate(item.eventDate)}</p>
              <p className="mt-8 text-[16px] leading-[1.6] text-white/80 md:text-[18px]">{item.summary}</p>
              <div className="mt-8 h-1 w-40 bg-gold" />
            </div>
            <img className="min-h-[280px] w-full rounded-xl object-cover md:min-h-[420px]" src={getImageUrl(item.image)} alt={item.title} />
            </div>
          </section>

          <section className="bg-deepBlue py-14 md:py-[72px] md:pb-24">
            <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-8 md:grid-cols-[180px_1fr] md:gap-12">
              <div><div className="mt-3 h-1 w-40 bg-gold" /></div>
              <div className="space-y-7 text-[16px] leading-[1.75] text-white/[0.86] md:text-[18px] md:leading-[1.9]">
                {body.map((paragraph, index) => (
                  <div key={index}>
                    <p>{paragraph}</p>
                    {index === 0 && item.image && <img className="my-10 w-full max-w-[920px] rounded-[14px] border border-gold/25" src={getImageUrl(item.image)} alt={item.title} />}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>

        {related.length > 0 && (
          <section className="bg-[#071126] py-14 md:py-20">
            <div className="container"><h2 className="font-din text-3xl text-white">BÀI VIẾT LIÊN QUAN</h2><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map((newsItem) => <NewsCard key={newsItem._id} item={newsItem} />)}</div></div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}
