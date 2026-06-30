import type { Metadata } from 'next';
import './globals.css';
import { dinCondensed, gotham, gothamBold, thuPhapThienAn } from '@/lib/fonts';
import { LanguageProvider } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Việt Văn Hiến',
  description: 'Công ty Cổ phần Việt Văn Hiến - Non Sông Nghìn Thuở, Vững Âu Vàng.',
  openGraph: {
    title: 'Việt Văn Hiến',
    description: 'Công ty Cổ phần Việt Văn Hiến - Non Sông Nghìn Thuở, Vững Âu Vàng.',
    url: 'https://www.vietvanhien.com',
    siteName: 'Việt Văn Hiến',
    images: ['/images/logo-vvh.png'],
    type: 'website'
  }
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
