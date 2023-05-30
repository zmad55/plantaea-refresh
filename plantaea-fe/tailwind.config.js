/** @type {import('tailwindcss').Config} */

module.exports = {
  content:
    ["./App.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'grayish-green': '#92AF9F',
        'custom-green': '#0ff029',
        'custom-red': '##f93d06',
        'custom-yellow': '#f9e463',
        'custom-pink': '#ec62c0',
      },
      fontFamily: {
        'josesans': ['josefinsans-light'],
        'josesans-reg': ['josefinsans-regular'],
        'josesans-italic': ['josefinsans-lightitalic']
      }
    },
  },
  plugins: [],
}

