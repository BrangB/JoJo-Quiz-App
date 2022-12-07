/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'color1': '#ECECFE',
        'color2': '#ACB1F9',
        'color3': '#585FF2',
        'color4': '#393FC2',
        'color5': '#7D8291',
        'color6': '#585C65',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
      }
    }
  },
  plugins: [],
}