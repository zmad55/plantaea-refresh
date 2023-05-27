/** @type {import('tailwindcss').Config} */

module.exports = {
  content:
    ["./App.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'grayish-green': '#92AF9F'
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

