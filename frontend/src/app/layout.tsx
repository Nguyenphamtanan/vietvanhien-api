import type { Metadata } from 'next';
import './globals.css';
import { dinCondensed, gotham, gothamBold, thuPhapThienAn } from '@/lib/fonts';
import { LanguageProvider } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Việt Văn Hiến',
  description: 'Website demo công ty Việt Văn Hiến'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${dinCondensed.variable} ${gotham.variable} ${gothamBold.variable} ${thuPhapThienAn.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
