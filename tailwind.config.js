/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greyBg:"#ffffff1a",
        secondary:"#F1F0FF",
        primary:"#5F51F1",
        textBlack01:"#080714",
        textBlack02:"#08071466",
        textgrey01:"#0807144D",
        textgrey02:"#0807149966"
      },
      fontFamily:{
        inter:'Urbanist,sans-serif'
      },
    },
  },
  plugins: [],
}