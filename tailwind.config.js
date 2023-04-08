/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        primary: "#18122B",
        secondary: "#03001C",
        cardColor: "#301E67",
        purple: "#6C4AB6",
        pink: "#F62682",
        third: "#FF6651",
      },
    },
  },
  plugins: [],
};
