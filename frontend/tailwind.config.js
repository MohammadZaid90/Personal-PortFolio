/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  safelist: [
    'bg-white/5', 'bg-white/6', 'bg-white/8', 'bg-white/10',
    'border-white/6', 'border-white/8', 'border-white/10', 'border-white/12',
    'text-white/20', 'text-white/25', 'text-white/30', 'text-white/35',
    'text-white/40', 'text-white/45', 'text-white/50', 'text-white/60',
    'hover:bg-white/8',
    'border-accent/20', 'border-accent/30', 'border-accent/35', 'border-accent/40',
    'hover:border-accent/30', 'hover:border-accent/35',
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          2: 'var(--bg-2)',
          3: 'var(--bg-3)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
        },
        accent: {
          DEFAULT: '#6c63ff',
          2: '#a78bfa',
          3: '#38bdf8',
        },
        primary: '#6c63ff',
        green: '#22d3a0',
      },
      transitionDuration: { 350: '350ms' },
      animation: {
        drift: 'drift 12s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(30px,20px) scale(1.05)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)',
      },
      backgroundSize: { grid: '60px 60px' },
    },
  },
  plugins: [],
};
