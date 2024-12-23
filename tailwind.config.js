/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
      },
      colors: {
        background: '#13141f',
        card: '#1a1b2e',
      },
      screens: {
        '2k': { 'raw': '(min-width: 2560px)' },
      },
    },
  },
  plugins: [],
};
