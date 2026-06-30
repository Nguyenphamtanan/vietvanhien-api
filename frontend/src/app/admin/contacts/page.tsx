import AdminShell from '@/components/admin/AdminShell';
import ContactManager from '@/components/admin/ContactManager';

export default function ContactsAdminPage() {
  return (
    <AdminShell title="Contacts">
      <ContactManager />
    </AdminShell>
  );
}
