'use client';

import { LockKeyhole } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import request from '@/lib/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const result = await request<{ token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      localStorage.setItem('vvh_admin_token', result.token);
      router.replace('/admin/dashboard');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Không thể đăng nhập.');
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg border border-gold/25 bg-white p-8 shadow-soft">
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-lg bg-navy p-3 text-gold">
            <LockKeyhole size={24} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-gold">Admin login</p>
            <h1 className="text-2xl font-semibold text-navy">Việt Văn Hiến</h1>
          </div>
        </div>
        <label className="block text-sm font-medium text-ink">
          Email
          <input className="admin-input mt-1" name="email" type="email" required />
        </label>
        <label className="mt-4 block text-sm font-medium text-ink">
          Mật khẩu
          <input className="admin-input mt-1" name="password" type="password" required />
        </label>
        <button className="mt-6 w-full rounded-lg bg-navy px-4 py-3 font-semibold text-white hover:bg-jade" type="submit">
          Đăng nhập
        </button>
        {message && <p className="mt-4 text-sm text-red-700">{message}</p>}
      </form>
    </main>
  );
}
