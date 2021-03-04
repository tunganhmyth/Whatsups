module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        san: ['Oswald', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
// const colors = require('tailwindcss/colors')

// module.exports = {
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: colors.black,
//       white: colors.white,
//       gray: colors.trueGray,
//       indigo: colors.indigo,
//       red: colors.rose,
//       yellow: colors.amber,
//     }
//   }
// }
module.exports = {
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.975rem',
      'lg': '1.5rem',
      'full': '9999px',
      'large': '12px',
    }
  }
}
