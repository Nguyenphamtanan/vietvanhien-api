'use client';

import { Save } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import request, { adminRequest } from '@/lib/api';
import type { SiteSetting } from '@/types';

const blankSite: SiteSetting = {
  heroTitle: '',
  heroSubtitle: '',
  heroImage: '',
  heroVideo: '',
  aboutTitle: '',
  aboutContent: '',
  vision: '',
  mission: '',
  activityFields: [],
  contactEmail: '',
  contactPhone: '',
  contactAddress: ''
};

export default function LandingContentForm() {
  const [site, setSite] = useState<SiteSetting>(blankSite);
  const [fieldsText, setFieldsText] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    request<SiteSetting | null>('/site')
      .then((data) => {
        if (!data) return;
        setSite({ ...blankSite, ...data });
        setFieldsText((data.activityFields || []).map((item) => `${item.title}|${item.description}`).join('\n'));
      })
      .catch((error) => setMessage(error.message));
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const activityFields = fieldsText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [title, ...description] = line.split('|');
        return { title: title.trim(), description: description.join('|').trim() };
      });

    try {
      const saved = await adminRequest<SiteSetting>('/admin/site', {
        method: 'PUT',
        body: JSON.stringify({ ...site, activityFields })
      });
      setSite(saved);
      setMessage('Đã cập nhật nội dung landing page.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Không thể lưu nội dung.');
    }
  }

  function update(key: keyof SiteSetting, value: string) {
    setSite({ ...site, [key]: value });
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-gold/20 bg-white p-5 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Hero title" value={site.heroTitle} onChange={(value) => update('heroTitle', value)} />
        <Field label="Hero image fallback URL" value={site.heroImage} onChange={(value) => update('heroImage', value)} />
        <Field label="Hero subtitle" value={site.heroSubtitle} onChange={(value) => update('heroSubtitle', value)} textarea />
        <Field label="Hero video URL" value={site.heroVideo} onChange={(value) => update('heroVideo', value)} />
        <Field label="About title" value={site.aboutTitle} onChange={(value) => update('aboutTitle', value)} />
        <Field label="About content" value={site.aboutContent} onChange={(value) => update('aboutContent', value)} textarea />
        <Field label="Tầm nhìn" value={site.vision} onChange={(value) => update('vision', value)} textarea />
        <Field label="Sứ mệnh" value={site.mission} onChange={(value) => update('mission', value)} textarea />
        <Field label="Email liên hệ" value={site.contactEmail} onChange={(value) => update('contactEmail', value)} />
        <Field label="Số điện thoại" value={site.contactPhone} onChange={(value) => update('contactPhone', value)} />
        <label className="block text-sm font-medium text-ink md:col-span-2">
          Địa chỉ
          <input className="admin-input mt-1" value={site.contactAddress} onChange={(e) => update('contactAddress', e.target.value)} />
        </label>
        <label className="block text-sm font-medium text-ink md:col-span-2">
          Lĩnh vực hoạt động, mỗi dòng: Tiêu đề|Mô tả
          <textarea className="admin-input mt-1 min-h-36" value={fieldsText} onChange={(e) => setFieldsText(e.target.value)} />
        </label>
      </div>
      <button className="mt-6 flex items-center gap-2 rounded-lg bg-navy px-5 py-3 font-semibold text-white hover:bg-jade" type="submit">
        <Save size={18} />
        Lưu nội dung
      </button>
      {message && <p className="mt-4 text-sm text-jade">{message}</p>}
    </form>
  );
}

function Field({ label, value, onChange, textarea = false }: { label: string; value: string; onChange: (value: string) => void; textarea?: boolean }) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      {textarea ? (
        <textarea className="admin-input mt-1 min-h-28" value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className="admin-input mt-1" value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}
