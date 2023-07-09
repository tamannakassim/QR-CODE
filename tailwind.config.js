/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
      fontSize:{
        'ab':'0.9375rem', //setting the font size to 15px (ab --> almost base)
      },
    },
  },
  plugins: [],
}

