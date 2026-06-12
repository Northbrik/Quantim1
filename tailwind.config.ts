import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f1e8',
        paperSoft: '#ece6d5',
        leaf: '#5a8a4a',
        forest: '#2f5238',
        forestDark: '#1f3826',
        earth: '#6b4a2b',
        earthSoft: '#a07a4f',
        ink: '#2a2a26',
        inkSoft: '#5a5750',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
