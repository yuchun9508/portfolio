const colors = {
  jetBlack: '#000401',
  gunmetalGray: '#4e545c',
  gunmetalGrayDark: '#171C1c',
  pewter: '#8d9797',
  white: '#e5e8e8',
}

const fonts = {
  inter: ['"Inter"', 'sans-serif'],
}

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.jetBlack,
      secondary: {
        DEFAULT: colors.gunmetalGray,
        dark: colors.gunmetalGrayDark,
      },
      accent: colors.pewter,
      neutral: colors.white,
    },
    extend: {
      fontFamily: {
        primary: fonts.inter,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
