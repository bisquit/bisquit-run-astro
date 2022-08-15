/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Fira Code'],
    },
    screens: {
      'lg': '800px',
      'xl': '800px',
      '2xl': '800px',
    },
  },
  plugins: [],
  // darkMode: 'class',
};
