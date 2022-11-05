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
      keyframes: {
        'c-ltr-slidein': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'c-rtl-slidein': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        'c-ltr-slidein': 'c-ltr-slidein 0.4s ease-in',
        'c-rtl-slidein': 'c-rtl-slidein 0.4s ease-in',
      },
    },
  },
  plugins: [],
}
