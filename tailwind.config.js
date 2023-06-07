/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      screens: {
        'sm': '320px',  // Target iPhone 5 screen size and smaller
        'md': '375px',  // Target iPhone 6/7/8 screen size and smaller
        'lg': '414px',  // Target iPhone 6/7/8 Plus screen size and smaller
      },
      height:{
        '100' : '32rem',
      }
    },
  },
  plugins: [],
}

