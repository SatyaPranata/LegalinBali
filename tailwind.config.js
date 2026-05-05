/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0fdf4",
          100: "#d8f3dc",
          200: "#b7e4c7",
          300: "#74c69d",
          400: "#52b788",
          500: "#40916c",
          600: "#2d6a4f",
          700: "#1b4332",
          800: "#081c15",
        },
        cream: "#f8f5f0",
        dark: "#1b2e1e",
      },
      fontFamily: {
        display: ['"Montserrat"', "sans-serif"],
        body: ['"Montserrat"', "sans-serif"],
      },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        pulse2: { "0%,100%": { transform: "scale(1)", opacity: "1" }, "50%": { transform: "scale(1.12)", opacity: "0.8" } },
        fillBar: { from: { width: "0%" }, to: { width: "100%" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { from: { backgroundPosition: "-200% center" }, to: { backgroundPosition: "200% center" } },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        fadeIn: "fadeIn 0.6s ease forwards",
        pulse2: "pulse2 1.6s ease-in-out infinite",
        fillBar: "fillBar 1.8s ease forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
