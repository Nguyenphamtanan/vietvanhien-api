'use client';

import { useLanguage } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-white/30 px-2 py-1.5 font-din text-[12px] uppercase tracking-[0.1em] sm:px-3 sm:py-2 sm:text-[13px] sm:tracking-[0.12em]">
      <button
        type="button"
        className={`transition ${locale === 'vi' ? 'text-gold' : 'text-white/70 hover:text-gold'}`}
        onClick={() => setLocale('vi')}
        aria-pressed={locale === 'vi'}
      >
        VI
      </button>
      <span className="mx-2 text-white/35">|</span>
      <button
        type="button"
        className={`transition ${locale === 'en' ? 'text-gold' : 'text-white/70 hover:text-gold'}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
}
