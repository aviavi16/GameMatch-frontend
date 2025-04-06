/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ כאן בדיוק!
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineClamp: {
        3: '3',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [],
};
