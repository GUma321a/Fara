module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: 'max(5%, 16px)',
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '1000px',
      midlg: '1150px',
      xl: '1300px',
    },

    fontFamily: {
      primary: 'Montserrat, sans-serif',
      secondary: 'Open Sans, sans-serif',
    },

    extend: {
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        xxl: '48px',

        '56px': '56px',
        '64px': '64px',
        '80px': '80px',
        '100px': '100px',
        '120px': '120px',
        '160px': '160px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#5540BF',
        secondary: '#272765',
        cta: '#1D32F4',
        ghost: '#151D66',
        gray: {
          100: '#F4F6FC',
          200: '#ADB3C5',
          300: '#8991AA',
          400: '#6A7390',
          500: '#283563',
          600: '#1D294E',
          700: '#061030',
        },
        black: '#040C25',
        white: '#ffffff',
        system: {
          error: '#E00000',
          success: '#0EAB44',
          link: '#000000',
        },
      },

      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        72: '72px',
      },

      lineHeight: {
        100: '100%',
        110: '110%',
        120: '120%',
        130: '130%',
        140: '140%',
        150: '150%',
        160: '160%',
      },

      letterSpacing: {
        tightest: '-0.04em',
        tight: '-0.02em',
      },

      transitionDuration: {
        DEFAULT: '200ms',
      },

      gridTemplateColumns: {
        168: 'repeat(3, minmax(0, 168px))',
      },

      zIndex: {
        1: '1',
        2: '2',
        100: '100',
        110: '110',
        120: '120',
      },
    },
  },
};
