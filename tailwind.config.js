/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins"]
      }
    },
    colors:{
      ...colors,
      navBarActiveColor:'#2F4CDD',
      primaryColor:'#2F4CDD',
      onPrimaryColor:'#FFF',
      textLightColor:'#969BA0',
      backgroundGrayColor:'#E9ECFF',
      darkRed:'#FF6D4D',
      lightRed:'#FFEBE7',
      darkGreen:'#2BC155',
      lightGreen:'#E9FFEF'


      
    },
    
  },
  plugins: [],
}
