/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-header' : "#101010",
        'dark-background': "#1a202c",
        'dark-background2': "#2d3848",
        'dark-fontcolor':'#E2E2E2'
      }
    },
  },
  plugins: [],
}

