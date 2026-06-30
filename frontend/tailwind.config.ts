import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0b1f3a',
        ink: '#172033',
        cream: '#f7f1e6',
        burgundy: '#800020',
        gold: '#D4AF37',
        deepBlue: '#0F2042',
        jade: '#1d6b63'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        din: ['var(--font-din)', 'Arial Narrow', 'sans-serif'],
        gotham: ['var(--font-gotham)', 'Arial', 'sans-serif'],
        gothamBold: ['var(--font-gotham-bold)', 'Arial', 'sans-serif'],
        thuphap: ['var(--font-thuphap-thien-an)', 'serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(11, 31, 58, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
