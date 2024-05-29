/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "w90p": "90%",
        "w10p": "10%"
      },
      height: {
        "h10p": "10%",
        "h90p": "90%",
        "h95p": "95%",
        "h85p": "85%"
      }
    },
  },
  plugins: [],
}

