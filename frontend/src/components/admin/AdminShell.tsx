'use client';

import { BarChart3, Handshake, Home, Inbox, LayoutDashboard, LogOut, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/landing-content', label: 'Landing Content', icon: Home },
  { href: '/admin/projects', label: 'Projects', icon: BarChart3 },
  { href: '/admin/news-events', label: 'News & Events', icon: Newspaper },
  { href: '/admin/partners', label: 'Partners', icon: Handshake },
  { href: '/admin/contacts', label: 'Contacts', icon: Inbox }
];

export default function AdminShell({ children, title }: { children: React.ReactNode; title: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('vvh_admin_token');
    if (!token) {
      router.replace('/admin/login');
      return;
    }
    setReady(true);
  }, [router]);

  function logout() {
    localStorage.removeItem('vvh_admin_token');
    router.replace('/admin/login');
  }

  if (!ready) {
    return <div className="flex min-h-screen items-center justify-center bg-cream text-navy">Đang kiểm tra phiên đăng nhập...</div>;
  }

  return (
    <div className="min-h-screen bg-cream md:grid md:grid-cols-[280px_1fr]">
      <aside className="border-b border-gold/20 bg-navy text-white md:min-h-screen md:border-b-0 md:border-r">
        <div className="flex items-center justify-between px-5 py-5 md:block">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Admin</p>
            <h1 className="mt-1 text-xl font-semibold">Việt Văn Hiến</h1>
          </div>
          <button className="rounded-lg p-2 text-cream hover:bg-white/10 md:hidden" onClick={logout} title="Đăng xuất">
            <LogOut size={20} />
          </button>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-3 pb-4 md:block md:space-y-1 md:overflow-visible">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-w-max items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  active ? 'bg-gold text-navy' : 'text-cream hover:bg-white/10'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden px-3 py-5 md:block">
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-cream hover:bg-white/10" onClick={logout}>
            <LogOut size={18} />
            Đăng xuất
          </button>
        </div>
      </aside>
      <main className="min-w-0">
        <header className="border-b border-gold/20 bg-white px-5 py-5 md:px-8">
          <p className="text-sm uppercase tracking-[0.18em] text-gold">Hệ thống quản trị</p>
          <h2 className="mt-1 text-2xl font-semibold text-navy">{title}</h2>
        </header>
        <div className="p-5 md:p-8">{children}</div>
      </main>
    </div>
  );
}
