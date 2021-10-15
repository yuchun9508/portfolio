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
    fontSize: {
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '40px'],
      '3xl': ['32px', '46px'],
      '4xl': ['48px', '62px'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2.5rem',
        lg: '8rem',
        xl: '10rem',
      },
    },
    extend: {
      fontFamily: {
        primary: fonts.inter,
      },
      zIndex: {
        '-1': '-1',
        '99': '99',
      },
      padding: {
        '9/12': '75%',
        '16/12': '133%',
      },
      width: {
        '14/12': '116%',
        '22/12': '183%',
      },
      dropShadow: {
        '3xl': '0 4px 10px rgba(0, 4, 1, 0.15)',
      }
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
      inset: ['hover'],
    },
  },
  plugins: [],
}
