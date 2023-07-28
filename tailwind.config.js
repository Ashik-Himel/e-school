/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        "primary": "#21B573",
        "hero-bg": "#F0FFF0",
        "orange": "#FD511A",
        "normal-text": "#585859",
        "title": "#413960",
        "footer-gray": "#CDCDCD",
        "footer-bg": "#282531"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#21B573"
        },
      }
    ]
  }
}