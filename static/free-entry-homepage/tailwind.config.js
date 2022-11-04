/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screen: {
    },
    fontFamily: {
      // sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': {
          light: '#998795',
          DEFAULT: '#3f1f39',
        }
      },

    },
  },
  plugins: [],
}
