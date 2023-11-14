/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette': {
          'one': '#E6CCFF',
          'two': '#8000FF',
          'three': '#00F399FA',
          'four': '#F45531'
        }
      }
    },
    fontFamily:{
      'poppins':'Poppins'
    }
  },
  plugins: [],
}

