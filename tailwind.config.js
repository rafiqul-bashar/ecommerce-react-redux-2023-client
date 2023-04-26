/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#83b735",
      },
      container: {
        padding: "1rem",
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
