/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFBFC',
        'brand-green': '#447604',
        'brand-dark': '#171D1C',
        'brand-aqua': '#0BDBD8',
        'brand-gray': '#2F2F2F',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      }
    },
  },
  plugins: [],
};
