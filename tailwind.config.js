/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        xsm: '150px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      // colors: {
      //   'color1': '#ECECFE',
      //   'color2': '#ACB1F9',
      //   'color3': '#585FF2',
      //   'color4': '#393FC2',
      //   'color5': '#7D8291',
      //   'color6': '#585C65',
      // },
      // fontFamily: {
      //   sans: ['Graphik', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
      extend: {
        flex: {
          '100': '0 0 100%',
          '2': '0 0 22%',
          '3': '0 0 30%'
        },
        },
      // }
    
  },
  plugins: [],
}