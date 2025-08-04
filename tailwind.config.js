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
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        rotate: 'spinSlow 10s linear infinite',
      },
    },
  },
  plugins: [],
};
