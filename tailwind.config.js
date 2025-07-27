/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-3': 'rgba(0, 0, 0, 0.03)',
      },
      height: {
        'screen-minus-68': 'calc(100vh - 68px)',
      },
    },
  },
  plugins: [],
};
