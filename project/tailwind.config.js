/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Lora', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0b9ca',
          400: '#8593ac',
          500: '#677591',
          600: '#525d76',
          700: '#434c60',
          800: '#3a4251',
          900: '#0f1419',
          950: '#080b10',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'marquee-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'blink': 'blink 1.1s step-end infinite',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(15, 20, 25, 0.06), 0 8px 24px rgba(15, 20, 25, 0.06)',
        'card-hover': '0 4px 8px rgba(15, 20, 25, 0.08), 0 24px 48px rgba(15, 20, 25, 0.12)',
        'glow': '0 0 0 1px rgba(59, 130, 246, 0.15), 0 12px 40px rgba(59, 130, 246, 0.12)',
      },
    },
  },
  plugins: [],
};
