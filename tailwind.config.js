/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfPro: ["SFProRegular", "sans-serif"],
        sfProBold: ["SFProBold", "sans-serif"],
        sfProMedium: ["SFProMedium", "sans-serif"],
      },
    },
  },
  plugins: [],
};

