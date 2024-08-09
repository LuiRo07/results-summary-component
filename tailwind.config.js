/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // Primary
      colors: {
        'light-red': '#FF5757',
        'orangey-yellow': '#FFB01F',
        'green-teal': '#00BD91',
        'cobal-blue': '#0013BD',
        // Gradients
        'light-slate-blue': '#7857FF',
        'light-royal-blue': '#2E2BE9',
        'violet-blue': '#4E21CA',
        'persian-blue': '#2421CA',
        // Neutral
        'pale-blue': '#EBF1FF',
        'light-lavender': '#C8C7FF',
        'dark-gray-blue': '#303B5A',
      },
      fontFamily: {
        'hanken-grotesk': ['"Hanken Grotesk", sans-serif'],
      },
    },
  },
  plugins: [],
}
