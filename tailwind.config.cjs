/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black:  '#0A0A0A',
        card:   '#111111',
        border: '#1F1F1F',
        violet: '#7C3AED',
        'violet-light': '#9B6DFF',
        gray:   '#A0A0A0',
        white:  '#F9F9F9',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
