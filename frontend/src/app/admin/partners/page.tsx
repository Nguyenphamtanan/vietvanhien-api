import AdminResourceManager from '@/components/admin/AdminResourceManager';
import AdminShell from '@/components/admin/AdminShell';

export default function PartnersAdminPage() {
  return (
    <AdminShell title="Partners">
      <AdminResourceManager
        title="đối tác"
        endpoint="/admin/partners"
        defaults={{ name: '', logo: '', website: '', description: '', active: true }}
        columns={[
          { key: 'name', label: 'Tên đối tác' },
          { key: 'website', label: 'Website' },
          { key: 'description', label: 'Mô tả' }
        ]}
        fields={[
          { name: 'name', label: 'Tên đối tác' },
          { name: 'image', label: 'Chọn logo', type: 'file' },
          { name: 'website', label: 'Website' },
          { name: 'description', label: 'Mô tả', type: 'textarea' },
          { name: 'active', label: 'Đang hiển thị', type: 'checkbox' }
        ]}
      />
    </AdminShell>
  );
}
