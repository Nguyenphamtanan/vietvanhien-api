import AdminResourceManager from '@/components/admin/AdminResourceManager';
import AdminShell from '@/components/admin/AdminShell';

export default function NewsEventsAdminPage() {
  return (
    <AdminShell title="News & Events">
      <AdminResourceManager
        title="tin tức / sự kiện"
        endpoint="/admin/news-events"
        defaults={{ title: '', summary: '', content: '', image: '', eventDate: '', type: 'news', published: true }}
        columns={[
          { key: 'title', label: 'Tiêu đề' },
          { key: 'type', label: 'Loại' },
          { key: 'summary', label: 'Tóm tắt' }
        ]}
        fields={[
          { name: 'title', label: 'Tiêu đề' },
          { name: 'summary', label: 'Tóm tắt', type: 'textarea' },
          { name: 'content', label: 'Nội dung', type: 'textarea' },
          { name: 'image', label: 'Chọn ảnh', type: 'file' },
          { name: 'eventDate', label: 'Ngày', type: 'date' },
          {
            name: 'type',
            label: 'Loại',
            type: 'select',
            options: [
              { label: 'Tin tức', value: 'news' },
              { label: 'Sự kiện', value: 'event' }
            ]
          },
          { name: 'published', label: 'Xuất bản', type: 'checkbox' }
        ]}
      />
    </AdminShell>
  );
}
