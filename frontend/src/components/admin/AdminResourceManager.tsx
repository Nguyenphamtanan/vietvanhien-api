'use client';

import { Edit3, Plus, Save, Trash2 } from 'lucide-react';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { adminRequest, resolveAssetUrl } from '@/lib/api';

type Field = {
  name: string;
  label: string;
  type?: 'text' | 'textarea' | 'select' | 'checkbox' | 'date' | 'file';
  options?: { label: string; value: string }[];
};

type Props = {
  endpoint: string;
  title: string;
  fields: Field[];
  columns: { key: string; label: string }[];
  defaults: Record<string, unknown>;
};

export default function AdminResourceManager({ endpoint, title, fields, columns, defaults }: Props) {
  const [items, setItems] = useState<Record<string, any>[]>([]);
  const [editing, setEditing] = useState<Record<string, any> | null>(null);
  const [form, setForm] = useState<Record<string, any>>(defaults);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [message, setMessage] = useState('');

  const load = useCallback(async () => {
    const data = await adminRequest<Record<string, any>[]>(endpoint);
    setItems(data);
  }, [endpoint]);

  useEffect(() => {
    load().catch((error) => setMessage(error.message));
  }, [load]);

  function startCreate() {
    setEditing(null);
    setForm(defaults);
    setImageFile(null);
    setImagePreview('');
    setMessage('');
  }

  function startEdit(item: Record<string, any>) {
    setEditing(item);
    setForm({ ...defaults, ...item, eventDate: item.eventDate ? item.eventDate.slice(0, 10) : item.eventDate });
    setImageFile(null);
    setImagePreview(resolveAssetUrl(item.image || item.logo));
    setMessage('');
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const path = editing?._id ? `${endpoint}/${editing._id}` : endpoint;
    const method = editing?._id ? 'PUT' : 'POST';
    const payload = { ...form };

    if (payload.eventDate === '') {
      delete payload.eventDate;
    }

    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (['_id', 'createdAt', 'updatedAt', '__v', 'image', 'logo'].includes(key) || value === undefined || value === null) return;
      formData.append(key, String(value));
    });

    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      await adminRequest(path, { method, body: formData });
      await load();
      startCreate();
      setMessage('Đã lưu dữ liệu.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Không thể lưu dữ liệu.');
    }
  }

  function selectImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : imagePreview);
  }

  async function remove(id: string) {
    if (!confirm('Xóa mục này?')) return;
    await adminRequest(`${endpoint}/${id}`, { method: 'DELETE' });
    await load();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
      <form onSubmit={submit} className="rounded-lg border border-gold/20 bg-white p-5 shadow-soft">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-navy">{editing ? `Sửa ${title}` : `Thêm ${title}`}</h3>
          <button type="button" className="rounded-lg border border-gold/30 p-2 text-navy hover:bg-cream" onClick={startCreate} title="Tạo mới">
            <Plus size={18} />
          </button>
        </div>
        <div className="space-y-4">
          {fields.map((field) => (
            <label key={field.name} className="block text-sm font-medium text-ink">
              {field.label}
              {field.type === 'textarea' ? (
                <textarea className="admin-input mt-1 min-h-28" value={form[field.name] || ''} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} />
              ) : field.type === 'select' ? (
                <select className="admin-input mt-1" value={form[field.name] || ''} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <span className="mt-2 flex items-center gap-2">
                  <input type="checkbox" checked={Boolean(form[field.name])} onChange={(e) => setForm({ ...form, [field.name]: e.target.checked })} />
                  <span className="text-ink/70">Bật</span>
                </span>
              ) : field.type === 'file' ? (
                <span className="mt-1 block">
                  <input className="block w-full text-sm text-ink file:mr-3 file:rounded-md file:border-0 file:bg-navy file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-jade" type="file" accept="image/jpeg,image/png,image/webp" onChange={selectImage} />
                  {imagePreview && <img className="mt-3 h-32 w-full rounded-md border border-gold/20 object-cover" src={imagePreview} alt="Xem trước ảnh" />}
                </span>
              ) : (
                <input className="admin-input mt-1" type={field.type || 'text'} value={form[field.name] || ''} onChange={(e) => setForm({ ...form, [field.name]: e.target.value })} />
              )}
            </label>
          ))}
        </div>
        <button className="mt-5 flex items-center gap-2 rounded-lg bg-navy px-4 py-3 font-semibold text-white hover:bg-jade" type="submit">
          <Save size={18} />
          Lưu
        </button>
        {message && <p className="mt-4 text-sm text-jade">{message}</p>}
      </form>

      <section className="overflow-hidden rounded-lg border border-gold/20 bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                {columns.map((column) => <th key={column.key} className="px-4 py-3 font-semibold">{column.label}</th>)}
                <th className="px-4 py-3 text-right font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id} className="border-t border-cream">
                  {columns.map((column) => (
                    <td key={column.key} className="max-w-[280px] px-4 py-3 text-ink/80">
                      {String(item[column.key] ?? '').slice(0, 120)}
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-lg border border-gold/30 p-2 text-navy hover:bg-cream" onClick={() => startEdit(item)} title="Sửa">
                        <Edit3 size={17} />
                      </button>
                      <button className="rounded-lg border border-red-200 p-2 text-red-700 hover:bg-red-50" onClick={() => remove(item._id)} title="Xóa">
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {!items.length && (
                <tr>
                  <td className="px-4 py-8 text-center text-ink/60" colSpan={columns.length + 1}>Chưa có dữ liệu.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
