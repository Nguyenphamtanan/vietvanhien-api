'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { resolveAssetUrl } from '@/lib/api';
import { useLanguage } from '@/lib/i18n';
import type { NewsEvent } from '@/types';
import RevealText from './RevealText';

export default function NewsCard({ item }: { item: NewsEvent }) {
  const { locale, t } = useLanguage();
  const date = new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'vi-VN', { dateStyle: 'medium' }).format(new Date(item.eventDate));

  return (
    <Link href={`/news/${item._id}`} className="group block overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-gold/60">
      {item.image && <div className="h-56 overflow-hidden"><img className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" src={resolveAssetUrl(item.image)} alt={item.title} /></div>}
      <div className="p-6">
        <RevealText><p className="font-din text-[12px] uppercase tracking-[0.16em] text-gold">{item.type === 'event' ? t('newsTypeEvent') : t('newsTypeNews')} <span className="ml-2 text-white/60">{date}</span></p></RevealText>
        <RevealText delay={0.08}><h3 className="mt-3 font-din text-xl leading-tight text-white">{item.title}</h3></RevealText>
        <RevealText delay={0.16}><p className="mt-3 line-clamp-3 text-sm leading-6 text-white/75">{item.summary}</p></RevealText>
        <span className="mt-5 inline-flex items-center gap-2 font-din text-sm text-gold group-hover:text-white">{t('readMore')} <ArrowUpRight size={16} /></span>
      </div>
    </Link>
  );
}
