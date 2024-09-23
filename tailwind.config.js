/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const withMT = require('@material-tailwind/react/utils/withMT')
export default withMT( {
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
})
