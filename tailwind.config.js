/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        azul: {
          preto: '#000000',
          escuro: '#061E3C',
          hover: '#1057B0'
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

