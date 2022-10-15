/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs :12,
      sm:16,
      md:18,
      lg:20,
      xl:24,
      '2xl':32,
    },

    colors: {

       transparent: 'transparent',
      //tons de preto
      black:'#000',
      white:'#fff',

      //tons de cinza
      gray: { // cria um objeto cinza e isntancia suas tonalidades
        900 : '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      
      
        cyan: {
          500:'#81D8F7',
          300:'#9be1fb'
        }
       //tons de siano

       

    },
    extend: {
      fontFamily:{
        sans:'Inter,sans-serif'
      }
    },
  },
  plugins: [],
}
