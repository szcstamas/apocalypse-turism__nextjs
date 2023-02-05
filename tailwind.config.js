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
      },
      backgroundImage: {
        'hero-pattern': "url('/img/background-apocalypse.jpg')",
      }
    },
    colors: {
      'darkbg': '#1b1c17',
      'darkbgtransp': 'rgba(0, 0, 0, .25)',
      'white': '#ffffff'
    }
  },
  plugins: [],
}