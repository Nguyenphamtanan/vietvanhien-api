'use client';

import { useEffect, useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import { adminRequest } from '@/lib/api';

type Stats = {
  projects: number;
  newsEvents: number;
  partners: number;
  contacts: number;
  newContacts: number;
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    adminRequest<Stats>('/admin/dashboard').then(setStats).catch((error) => setMessage(error.message));
  }, []);

  const cards = [
    { label: 'Dự án', value: stats?.projects ?? 0 },
    { label: 'Tin tức / sự kiện', value: stats?.newsEvents ?? 0 },
    { label: 'Đối tác', value: stats?.partners ?? 0 },
    { label: 'Liên hệ', value: stats?.contacts ?? 0 },
    { label: 'Liên hệ mới', value: stats?.newContacts ?? 0 }
  ];

  return (
    <AdminShell title="Dashboard">
      {message && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</p>}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <article key={card.label} className="rounded-lg border border-gold/20 bg-white p-5 shadow-soft">
            <p className="text-sm uppercase tracking-[0.16em] text-gold">{card.label}</p>
            <p className="mt-4 text-4xl font-semibold text-navy">{card.value}</p>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
