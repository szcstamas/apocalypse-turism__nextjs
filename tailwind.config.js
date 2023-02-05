/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raw: "Raw",
        apocalypse: "Apocalypse",
        proximaRegular: "Proxima Regular",
        proximaBold: "Proxima Bold",
        proximaBlack: "Proxima Black",
        robotoLight: "Roboto Light",
        robotoRegular: "Roboto Regular",
        robotoBlack: "Roboto Black",
      }
    },
    colors: {
      'darkbg': '#1b1c17',
      'white': '#ffffff'
    }
  },
  plugins: [],
}