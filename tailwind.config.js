/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'container':'1024px',
        'landing':'580px'
      },
      backgroundColor:{
        'maincolor':'rgba(23, 34, 86, 1)',
      },
    },
  },
  plugins: [],
}

