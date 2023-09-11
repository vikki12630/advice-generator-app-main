/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/index.html"],
  theme: {
    extend: {
      fontFamily:{
        'primary':['manrope','sans-serif']
      },
      boxShadow:{
        "custom": '0 0 30px 5px #53ffab'
      }
    },
  },
  plugins: [],
}

