/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // Update to match your actual file structure
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/postcss7-compat'), // Jika menggunakan PostCSS versi 7
  ],
};
