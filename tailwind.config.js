/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        instrumentSans:"'Instrument Sans', sans-serif"
      },
      colors:{
        platinum:"#DEE5E5",
        cambridgeBlue:"#9DC5BB",
        mint:"#17B890",
        hookerGreen:"#5E807F",
        darkGreen:"#082D0F"
      }
    },
  },
  plugins: [],
}

