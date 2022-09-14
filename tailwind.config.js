const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      primary: "#4D4DFE",
      secondary: "#c2410c",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.emerald,
      purple: colors.violet,
      gray: colors.gray,
      red: colors.red,
    },
    fontFamily: {
      mono: ["Roboto", "monospace"],
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "sans-serif"],
      display: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      gridTemplateRows: {
        "auto-fr": "auto 1fr",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
