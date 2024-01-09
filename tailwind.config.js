/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Secular One",
    },
    extend: {
      keyframes: {
        ping: {
          '0%': { 'opacity': '0%' },
          '50%': { 'opacity': '50%' },
          '100%': { 'opacity': '100%' },
        }
      }
    },
  },
  plugins: [],
}

