/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_base: "#44FFFF",
        primary_light: "#152737",
        primary_dark: "#061423",
        primary_deep: "#021422",
        primary_deeper: "#010E18",
        primary_red: "#CC383D",
        primary_gray: "#A8A8A8"
      }
    },
  },
  plugins: [],
}