'use client';

import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import request from '@/lib/api';
import { useLanguage } from '@/lib/i18n';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('');
  const { t } = useLanguage();

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      await request('/contacts', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      form.reset();
      setFormStatus(t('contactSuccess'));
    } catch (error) {
      setFormStatus(error instanceof Error ? error.message : t('contactError'));
    }
  }

  return (
    <form onSubmit={submitContact} className="rounded-lg border border-white/15 bg-white/[0.045] p-5 backdrop-blur-sm md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="admin-input border-white/15 bg-white/[0.96] text-sm text-ink" name="name" placeholder={t('contactName')} required />
        <input className="admin-input border-white/15 bg-white/[0.96] text-sm text-ink" name="email" type="email" placeholder="Email" required />
        <input className="admin-input border-white/15 bg-white/[0.96] text-sm text-ink md:col-span-2" name="phone" placeholder={t('contactPhone')} />
        <textarea
          className="admin-input min-h-32 border-white/15 bg-white/[0.96] text-sm text-ink md:col-span-2"
          name="message"
          placeholder={t('contactMessage')}
          required
        />
      </div>
      <label className="mt-5 flex items-start gap-3 text-[13px] leading-6 text-white/75">
        <input className="mt-1 h-4 w-4 accent-gold" name="detailConsent" type="checkbox" />
        {t('contactConsent')}
      </label>
      <button className="mt-6 flex w-full items-center justify-between rounded-full bg-gold py-2 pl-6 pr-2 font-din text-sm uppercase tracking-[0.08em] text-deepBlue transition hover:-translate-y-0.5 hover:bg-[#f2cf70]" type="submit">
        {t('contactSubmit')}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-deepBlue text-gold"><Send size={16} /></span>
      </button>
      {formStatus && <p className="mt-4 text-sm text-gold">{formStatus}</p>}
    </form>
  );
}
