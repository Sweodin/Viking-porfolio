/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#161616',
        'brand-gold': '#c5a578',
        'brand-text-light': '#e0e0e0',
        // You can keep viking colors if they are used elsewhere or remove them
        'viking-blue': '#2c3e50',
        'viking-stone': '#d7d7d7',
        'viking-wood': '#3a3a3a',
        'viking-fire': '#e67e22',
        'viking-text': '#ecf0f1',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        display: ['Cinzel', 'serif'], // For large headings
      },
    },
  },
  plugins: [],
}
