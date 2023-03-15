/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}', './index.html'],
  theme: {

    extend: {
      colors: {
        'accent': '#1f6feb',
      },
      backgroundImage: {
        'dot-grid': "url('/assets/dot-grid.png')",
      }
    },
  },
  plugins: [],
}