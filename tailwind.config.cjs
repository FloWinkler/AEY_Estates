/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#092215", //drk green
        secondary: "#D4A052", // gold
        tertiary: "#293133", // drk grey
        quaternary: "#EBE1CF", //beige

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};