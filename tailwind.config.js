/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "w95p": "95%",
        "w5p": "5%"
      },
      height: {
        "h10p": "10%",
        "h90p": "90%"
      }
    },
  },
  plugins: [],
}

