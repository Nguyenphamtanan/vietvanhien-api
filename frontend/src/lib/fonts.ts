import localFont from 'next/font/local';

export const dinCondensed = localFont({
  src: '../../public/fonts/DIN-Condensed-Bold.ttf',
  variable: '--font-din',
  display: 'swap'
});

export const gotham = localFont({
  src: [
    { path: '../../public/fonts/SVN-Gotham-Book.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/SVN-Gotham-Regular.otf', weight: '500', style: 'normal' }
  ],
  variable: '--font-gotham',
  display: 'swap'
});

export const gothamBold = localFont({
  src: '../../public/fonts/SVN-Gotham-Bold.otf',
  variable: '--font-gotham-bold',
  display: 'swap'
});

export const thuPhapThienAn = localFont({
  src: '../../public/fonts/UTM ThuPhap Thien An.ttf',
  variable: '--font-thuphap-thien-an',
  display: 'swap'
});
