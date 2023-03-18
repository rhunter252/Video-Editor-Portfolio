/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
    },
    fontFamily: {
      rang: ["RANG2", "cursive"],
      moglan: ["Moglan", "sans-serif"],
    },
  },
  plugins: [],
};
