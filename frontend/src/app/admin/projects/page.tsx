import AdminResourceManager from '@/components/admin/AdminResourceManager';
import AdminShell from '@/components/admin/AdminShell';

export default function ProjectsAdminPage() {
  return (
    <AdminShell title="Projects">
      <AdminResourceManager
        title="dự án"
        endpoint="/admin/projects"
        defaults={{ title: '', description: '', image: '', location: '', year: '', status: 'active', featured: true }}
        columns={[
          { key: 'title', label: 'Tên dự án' },
          { key: 'location', label: 'Địa điểm' },
          { key: 'year', label: 'Năm' },
          { key: 'status', label: 'Trạng thái' }
        ]}
        fields={[
          { name: 'title', label: 'Tên dự án' },
          { name: 'description', label: 'Mô tả', type: 'textarea' },
          { name: 'image', label: 'Chọn ảnh', type: 'file' },
          { name: 'location', label: 'Địa điểm' },
          { name: 'year', label: 'Năm' },
          {
            name: 'status',
            label: 'Trạng thái',
            type: 'select',
            options: [
              { label: 'Đang lên kế hoạch', value: 'planning' },
              { label: 'Đang triển khai', value: 'active' },
              { label: 'Hoàn thành', value: 'completed' }
            ]
          },
          { name: 'featured', label: 'Hiển thị nổi bật', type: 'checkbox' }
        ]}
      />
    </AdminShell>
  );
}
