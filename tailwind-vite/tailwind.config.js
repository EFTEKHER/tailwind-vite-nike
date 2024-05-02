/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
       wiggle:{
        "0%":{transform:"rotate(-3deg)"},
        "100":{transform:"rotate(3deg)"},
       },
       float:{
        "0%,100%":{transform:"translateY(0)"},
        "50%":{transform:"translateY(-20px)"}
       },
       fadeIn:{
        "0%":{opacity:"0"},
        "100%":{opacity:"1"}
       }
      },
      animation:{
        wiggle: "wiggle 1s infinite",
        float: "float 4s ease-in-out infinite", 
        fadeIn: "fadeIn 1s ease-in-out ",
       }
       
      ,

     theme:{
      backgroundImage:{
        "lines":"url('./src/assets/lines.png')"
      }
     }, 
      colors:{
        'electric-violet': {
          '50': '#faf5ff',
          '100': '#f4e9fe',
          '200': '#ead6fe',
          '300': '#dab6fc',
          '400': '#c387f9',
          '500': '#ac59f3',
          '600': '#9a3de6',
          '700': '#8226ca',
          '800': '#6e24a5',
          '900': '#5b1f84',
          '950': '#3d0962',
      },
      
      }
    },
  },
  plugins: [],
}