'use client';

import { Save } from 'lucide-react';
import { useEffect, useState } from 'react';
import { adminRequest } from '@/lib/api';
import type { Contact } from '@/types';

export default function ContactManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [message, setMessage] = useState('');

  async function load() {
    setContacts(await adminRequest<Contact[]>('/admin/contacts'));
  }

  useEffect(() => {
    load().catch((error) => setMessage(error.message));
  }, []);

  async function updateStatus(id: string, status: Contact['status']) {
    await adminRequest(`/admin/contacts/${id}`, { method: 'PUT', body: JSON.stringify({ status }) });
    await load();
    setMessage('Đã cập nhật trạng thái liên hệ.');
  }

  return (
    <section className="overflow-hidden rounded-lg border border-gold/20 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-4 py-3">Khách hàng</th>
              <th className="px-4 py-3">Liên hệ</th>
              <th className="px-4 py-3">Nội dung</th>
              <th className="px-4 py-3">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="border-t border-cream">
                <td className="px-4 py-3 font-medium text-navy">{contact.name}</td>
                <td className="px-4 py-3 text-ink/75">
                  <div>{contact.email}</div>
                  <div>{contact.phone}</div>
                </td>
                <td className="max-w-[360px] px-4 py-3 text-ink/75">{contact.message}</td>
                <td className="px-4 py-3">
                  <select className="admin-input" value={contact.status} onChange={(e) => updateStatus(contact._id, e.target.value as Contact['status'])}>
                    <option value="new">Mới</option>
                    <option value="processing">Đang xử lý</option>
                    <option value="completed">Hoàn tất</option>
                  </select>
                </td>
              </tr>
            ))}
            {!contacts.length && (
              <tr>
                <td className="px-4 py-8 text-center text-ink/60" colSpan={4}>Chưa có liên hệ.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {message && <p className="flex items-center gap-2 px-4 py-3 text-sm text-jade"><Save size={16} />{message}</p>}
    </section>
  );
}
