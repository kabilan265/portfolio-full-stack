/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:'#ff9C1A',
      secondary:'#F2F5F9',
      standout:'#EC1B09',
      black:'#000',
      white:'#fff',
      light:'#0B0909',
      card:'#FFEED9'
    },
    fontFamily: {
      /* sans: ['Poppins', 'sans-serif'], */
      serif: ['Poppins', 'sans-serif'],
      heading:['Raleway', 'sans-serif'],
      cursive:['Pacifico', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}