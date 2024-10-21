/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector' , '[data-mode="dark"]'],
  content: ["./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#75FBF2',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

