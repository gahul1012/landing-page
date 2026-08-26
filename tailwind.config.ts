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
          black:   '#0a0a0a',
          dark:    '#111111',
          surface: '#161616',
          card:    '#1c1c1c',
          border:  '#2a2a2a',
          red:     '#E31B23',
          redHover:'#c91218',
          white:   '#ffffff',
          muted:   '#999999',
          subtle:  '#666666',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.65) 50%, #0a0a0a 100%)',
        'gradient-hero-left': 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.8) 40%, rgba(10,10,10,0.2) 100%)',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.6)',
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
