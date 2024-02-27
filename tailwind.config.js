/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      honk: ["Honk", "sans-serif"],
      sans: ["Sans", "sans-serif"],
      kode: ["Kode-Mono", "Kode Mono"]
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

