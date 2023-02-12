/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: '#45A29E',
        brightRedLight: '#66FCF1',
        brightRedSupLight: '#c2fef9',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: '#C5C6C7',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',

        greenAccents: {
          100: '#e0fefc',
          200: '#c2fef9',
          300: '#a3fdf7',
          400: '#85fdf4',
          500: '#66fcf1',
          600: '#52cac1',
          700: '#3d9791',
          800: '#296560',
          900: '#143230',
        },
      },
    },
  },
  plugins: [],
}
