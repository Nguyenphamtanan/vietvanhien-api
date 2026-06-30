'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import request from '@/lib/api';
import { useLanguage } from '@/lib/i18n';
import type { NewsEvent } from '@/types';
import LanguageSwitcher from './LanguageSwitcher';
import MegaMenu from './MegaMenu';

export default function PublicNavbar() {
  const { locale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [latestNews, setLatestNews] = useState<NewsEvent[]>([]);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    request<NewsEvent[]>('/news-events')
      .then((items) => setLatestNews(items.slice(0, 5)))
      .catch(() => setLatestNews([]));
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setDrawerOpen(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function closeMenus() {
    clearCloseTimer();
    setMobileOpen(false);
    setCompanyOpen(false);
  }

  function openCompanyMenu() {
    clearCloseTimer();
    setCompanyOpen(true);
  }

  function scheduleCloseCompanyMenu() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setCompanyOpen(false), 180);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deepBlue/82 text-white backdrop-blur-xl">
        <div className="grid h-20 w-full grid-cols-[auto_1fr_auto_auto] items-center gap-2 px-4 lg:grid-cols-[auto_1fr_auto] lg:gap-5 lg:px-10 min-[1440px]:px-14">
          <Link href="/" className="group flex items-center gap-3" onClick={closeMenus}>
            <img className="h-12 w-12 object-contain lg:h-14 lg:w-14" src="/images/logo-vvh.png" alt="Viá»‡t VÄƒn Hiáº¿n" />
          </Link>

          <div className="pointer-events-none hidden max-w-[520px] justify-self-center overflow-visible whitespace-nowrap text-center font-thuphap text-[22px] leading-none tracking-[0.02em] text-gold xl:block min-[2048px]:text-[24px]">
            {t('slogan')}
          </div>

          <div className="pointer-events-none flex max-w-[145px] flex-col items-center justify-center justify-self-center whitespace-normal text-center font-thuphap text-[14px] leading-[1.15] tracking-[0.02em] text-gold min-[430px]:text-[15px] lg:hidden">
            <span className="mb-1 block">Non Sông nghìn thuở</span>
            <span className="block">Vững Âu Vàng</span>
          </div>

          <div className="flex items-center justify-end lg:col-start-3">
            <nav className="hidden items-center justify-end lg:flex">
              <div className="relative mr-7" onMouseEnter={openCompanyMenu} onMouseLeave={scheduleCloseCompanyMenu}>
                <button
                  className="gold-underline flex items-center gap-1 py-2 font-din text-[15px] uppercase tracking-[0.1em] text-white transition hover:text-gold"
                  onClick={() => setCompanyOpen((value) => !value)}
                >
                  {t('company')}
                  <ChevronDown size={16} />
                </button>
                <div
                  className={`absolute left-0 top-full mt-0 w-[300px] origin-top-left pt-1 transition duration-200 ${
                    companyOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                  onMouseEnter={openCompanyMenu}
                >
                  <MegaMenu onNavigate={closeMenus} />
                </div>
              </div>
              <Link className="gold-underline mr-7 py-2 font-din text-[15px] uppercase tracking-[0.1em] text-white transition hover:text-gold" href="/projects">
                {t('projects')}
              </Link>
              <Link className="gold-underline py-2 font-din text-[15px] uppercase tracking-[0.1em] text-white transition hover:text-gold" href="/news">
                {t('news')}
              </Link>
              <a className="ml-5 rounded-full bg-gold px-5 py-3 font-din text-sm uppercase tracking-[0.1em] text-deepBlue transition hover:bg-white" href="/#contact">
                {t('contact')}
              </a>
              <button
                type="button"
                className="ml-[18px] flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-gold hover:text-gold"
                onClick={() => setDrawerOpen(true)}
                aria-label={locale === 'en' ? 'Open latest updates' : 'Má»Ÿ cáº­p nháº­t má»›i'}
              >
                <Menu size={22} />
              </button>
              <div className="ml-[14px]">
                <LanguageSwitcher />
              </div>
            </nav>

            <div className="lg:hidden">
              <LanguageSwitcher />
            </div>
          </div>
          <button className="justify-self-end rounded-lg border border-white/15 p-2 text-white lg:hidden" onClick={() => setMobileOpen((value) => !value)} title={locale === 'en' ? 'Open menu' : 'Má»Ÿ menu'}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`border-t border-white/10 bg-deepBlue transition lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
          <div className="container py-4">
            <button className="flex w-full items-center justify-between py-3 text-left font-din text-[15px] uppercase tracking-[0.1em] text-white" onClick={() => setCompanyOpen((value) => !value)}>
              {t('company')}
              <ChevronDown size={18} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${companyOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <MegaMenu onNavigate={closeMenus} />
            </div>
            <Link className="block py-3 font-din text-[15px] uppercase tracking-[0.1em] text-white" href="/projects" onClick={closeMenus}>
              {t('projects')}
            </Link>
            <Link className="block py-3 font-din text-[15px] uppercase tracking-[0.1em] text-white" href="/news" onClick={closeMenus}>
              {t('news')}
            </Link>
            <a className="mt-3 block rounded-full bg-gold px-5 py-3 text-center font-din text-sm uppercase tracking-[0.1em] text-deepBlue" href="/#contact" onClick={closeMenus}>
              {t('contact')}
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] cursor-default bg-black/55"
              aria-label={locale === 'en' ? 'Close latest updates' : 'ÄÃ³ng cáº­p nháº­t má»›i'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeDrawer}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] h-screen w-[420px] max-w-[100vw] overflow-y-auto border-l border-gold/25 bg-[#09152D] px-8 py-8 text-white shadow-2xl sm:px-10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{locale === 'en' ? 'LATEST UPDATES' : 'Cáº¬P NHáº¬T Má»šI'}</p>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {locale === 'en' ? 'News, events and latest activities from Viá»‡t VÄƒn Hiáº¿n.' : 'Tin tá»©c, sá»± kiá»‡n vÃ  hoáº¡t Ä‘á»™ng má»›i nháº¥t tá»« Viá»‡t VÄƒn Hiáº¿n.'}
                  </p>
                </div>
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
                  onClick={closeDrawer}
                  aria-label={locale === 'en' ? 'Close latest updates' : 'ÄÃ³ng cáº­p nháº­t má»›i'}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-8">
                {latestNews.length ? (
                  latestNews.map((item) => <DrawerNewsItem key={item._id} item={item} locale={locale} onNavigate={closeDrawer} />)
                ) : (
                  <p className="border-y border-white/10 py-8 text-sm text-white/60">{locale === 'en' ? 'No updates yet.' : 'ChÆ°a cÃ³ cáº­p nháº­t má»›i.'}</p>
                )}
              </div>

              <div className="mt-8 grid gap-3">
                <Link
                  href="/news"
                  onClick={closeDrawer}
                  className="rounded-full border border-gold/50 px-5 py-3 text-center font-din text-sm uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-deepBlue"
                >
                  {locale === 'en' ? 'View all news' : 'Xem táº¥t cáº£ tin tá»©c'}
                </Link>
                <a
                  href="/#contact"
                  onClick={closeDrawer}
                  className="rounded-full bg-gold px-5 py-3 text-center font-din text-sm uppercase tracking-[0.12em] text-deepBlue transition hover:bg-white"
                >
                  {locale === 'en' ? 'Contact for partnership' : 'LiÃªn há»‡ há»£p tÃ¡c'}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function DrawerNewsItem({ item, locale, onNavigate }: { item: NewsEvent; locale: 'vi' | 'en'; onNavigate: () => void }) {
  const date = new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'vi-VN', { dateStyle: 'medium' }).format(new Date(item.eventDate));
  const badge = item.type === 'event' ? (locale === 'en' ? 'EVENT' : 'Sá»° KIá»†N') : locale === 'en' ? 'NEWS' : 'TIN Tá»¨C';

  return (
    <Link href={`/news/${item._id}`} onClick={onNavigate} className="group block border-b border-white/10 py-[18px]">
      <div className="flex items-center gap-3">
        <span className="font-din text-[12px] uppercase tracking-[0.16em] text-gold">{badge}</span>
        <span className="text-[12px] text-white/45">{date}</span>
      </div>
      <h3 className="mt-3 font-din text-xl leading-tight text-white transition group-hover:text-gold">{item.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/65">{item.summary}</p>
      <span className="mt-4 inline-flex items-center gap-2 font-din text-sm uppercase tracking-[0.08em] text-gold">
        {locale === 'en' ? 'Read more' : 'Xem thÃªm'} <ArrowUpRight size={15} />
      </span>
    </Link>
  );
}

