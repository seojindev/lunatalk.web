/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        horizontal: ['logo menu side'],
        vertical: ['logo . side', 'menu menu menu'],
      },
    },
    screens: {
      desktop: { max: '1200px' },
      tablet: { max: '768px' },
      moblie: { max: '375px' },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
