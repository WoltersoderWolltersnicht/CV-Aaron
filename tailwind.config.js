/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-header' : "#161417",
        'dark-background': "#161417",
        'dark-background2': "#221d21",
        'dark-fontcolor':'#E2E2E2',
        'accent-base' : '#e1a4fe',
        'accent-border' : '#3d244a'
      }
    },
  },
  plugins: [],
}

