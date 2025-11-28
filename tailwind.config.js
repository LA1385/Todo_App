/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'my-image':"url('/images/background.png')",
      },
    },
  },
  plugins: [],
}

