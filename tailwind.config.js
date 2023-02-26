/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#E9917E",
        "another":"#AACCFC"
      }
    },
  },
  plugins: [require("daisyui")],
}
