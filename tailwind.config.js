/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:
      {
        primary: "#bf612a",
        secondary: "#8c4e2a",
        secondary2: "#d98236",
        blue: {
          450: "#5f99f7"
        },
        black: "#0d0d0d",
        blac2: "#262626"
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        // sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
