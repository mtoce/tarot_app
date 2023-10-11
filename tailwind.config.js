/** @type {import('tailwindcss').Config} */

// const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-from-mid': 'radial-gradient(115% 90% at 0% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        cursive: ["var(--font-fuggles)"],
      },
      colors: {
        // Purple palette (main/home)
        'space': '#25283D',
        'plum': '#8F3985',
        'violet': '#A675A1',
        'pink': '#CEA2AC',
        'white': '#EFD9CE',
        // Swords palette (Air: steel-blue)
        'black': '#1E2019',
        'onyx': '#393E41',
        'gold': '#E2C044',
        'steel': '#587B7F',
        'white-s': '#D3D0CB',
        // Cups palette (water: light-blue)
        'columbia': '#C5D5EA',
        'blue-green': '#759EB8',
        'lake': '#7392B7',
        'powder': '#B3C5D7',
        'white-c': '#D8E1E9',
        // Wands palette (fire: red-orange)
        'red': '#B31D1D',
        'orange': '#EC4E20',
        'yellow': '#ECE750',
        'gray-w': '#353531',
        'white-w': '#D1D5DE',
        // Pentacles palette (earth: green-brown)
        'dark-brown': '#3D3522',
        'brown': '#4A442D',
        'hunter': '#386150',
        'teal': '#58B09C',
        'jade': '#CAF7E2',

        'white-base': '#F8F8F8',
        'gold2': '#D5A372',
      },
      'animation': {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            },
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            },
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            },
        },
      },
    },
  },
  plugins: [],
}
