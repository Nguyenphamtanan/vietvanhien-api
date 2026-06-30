'use client';

import { useEffect, useMemo, useState } from 'react';
import PublicFooter from '@/components/public/PublicFooter';
import PublicNavbar from '@/components/public/PublicNavbar';
import NewsCard from '@/components/public/NewsCard';
import request from '@/lib/api';
import type { NewsEvent } from '@/types';

export default function NewsPage() {
  const [items, setItems] = useState<NewsEvent[]>([]);
  const [filter, setFilter] = useState<'all' | NewsEvent['type']>('all');

  useEffect(() => {
    request<NewsEvent[]>('/news-events').then(setItems).catch(() => setItems([]));
  }, []);

  const visibleItems = useMemo(() => filter === 'all' ? items : items.filter((item) => item.type === filter), [filter, items]);

  return (
    <div className="public-shell min-h-screen font-gotham text-white">
      <PublicNavbar />
      <main className="pt-20">
        <section className="border-b border-white/10 bg-[#09152d] py-16 md:py-20"><div className="container"><p className="font-din text-[13px] uppercase tracking-[0.2em] text-gold">Việt Văn Hiến</p><h1 className="mt-3 font-din text-[38px] leading-none text-white md:text-[48px]">TIN TỨC & SỰ KIỆN</h1><p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/75">Cập nhật những câu chuyện, hoạt động và dấu mốc mới của Việt Văn Hiến.</p></div></section>
        <section className="bg-deepBlue py-14 md:py-20"><div className="container"><div className="mb-8 flex flex-wrap gap-3">{([['all', 'Tất cả'], ['news', 'Tin tức'], ['event', 'Sự kiện']] as const).map(([value, label]) => <button key={value} onClick={() => setFilter(value)} className={`rounded-full border px-4 py-2 font-din text-sm ${filter === value ? 'border-gold bg-gold text-deepBlue' : 'border-white/25 text-white hover:border-gold'}`}>{label}</button>)}</div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleItems.map((item) => <NewsCard key={item._id} item={item} />)}</div>{!visibleItems.length && <p className="text-white/65">Chưa có nội dung phù hợp.</p>}</div></section>
      </main>
      <PublicFooter />
    </div>
  );
}
