/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
    "./wrapper/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MajorMono: "Major Mono Display, monospace",
        Montserrat: "Montserrat, sans-serif",
      },
      colors: {
        primary: "#410b96",
        secondary: "#1d216c",
      },
      
    },
  },
  plugins: [require("@tailwindcss/typography")],
};