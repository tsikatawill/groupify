/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        appear: "appear 1s ease-out",
        slide: "slide 0.8s ease-out",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: "100%" },
        },
        slide: {
          "0%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
