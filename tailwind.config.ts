import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black:   '#ffffff',
          dark:    '#f8fafc',
          surface: '#ffffff',
          card:    '#f1f5f9',
          border:  '#e2e8f0',
          red:     '#E31B23',
          redHover:'#c91218',
          white:   '#0f172a',
          muted:   '#64748b',
          subtle:  '#94a3b8',
        },
      },
      fontFamily: {
        sans:    ['"DM Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', '"Archivo"', 'system-ui', 'sans-serif'],
        sharp:   ['"Archivo"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.05)',
        'card-hover': '0 12px 32px rgba(0,0,0,0.09)',
        'red': '0 4px 20px rgba(227,27,35,0.35)',
        'red-sm': '0 2px 10px rgba(227,27,35,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
