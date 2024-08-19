/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}", //Inclui ficheiros HTML e JS do projeto
    "!./node_modules",  //pra excluir os diretórios do node_modules
  ],
  theme: {
    extend: {
      backgroundImage: {
        "init": "url('../assets/img/img_bg_inicio.png')"
      },
    },
  },
  plugins: [],
}