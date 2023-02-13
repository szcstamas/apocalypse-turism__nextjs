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
      width: {
        '9%': '9.333333%'
      },
      dropShadow: {
        '3xl': '0 10px 20px rgba(0, 0, 0, 1)',
        '2xl': '0 10px 25px rgba(0, 0, 0, .8)'
      },
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
      'black': '#0d0d0d',
      'red': 'red',
      'darkgray': '#272727',
      'darkbgtransp': 'rgba(0, 0, 0, .7)',
      'white': '#ffffff',
    }
  },
  plugins: [],
}