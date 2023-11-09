/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        gray: '#cccccc',
        textGray: '#344054',
        headingGray: '#101828',
        blue: '#1e90ff',
        white: '#ffffff',
      }
    },
  },
  plugins: [],
}

