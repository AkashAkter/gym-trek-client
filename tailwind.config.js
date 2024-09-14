/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F81041",
        secondary: "#F81041",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
