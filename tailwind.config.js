/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron, sans-serif",
      secondary: "Inter, sans-serif",
    },

    extend: {
      colors: {
        purple: "#010208",
        pink: "#C824EC",
        red: " radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)",
      },
    },
    backgroundImage: {
      explore: "url('/src/assets/image/explore.png')",
    },
  },
  plugins: [],
};
