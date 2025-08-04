// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'], 
        outfit: ['"Outfit"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
