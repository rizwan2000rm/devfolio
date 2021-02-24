module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        50: "#875d60",
        100: "#7d5356",
        200: "#73494c",
        300: "#693f42",
        400: "#5f3538",
        500: "#552b2e",
        600: "#4b2124",
        700: "#41171a",
        800: "#370d10",
        900: "#2d0306"
      },
      secondary: {
        50: "#534343",
        100: "#493939",
        200: "#3f2f2f",
        300: "#352525",
        400: "#2b1b1b",
        500: "#211111",
        600: "#170707",
        700: "#0d0000",
        800: "#030000",
        900: "#000000"
      }
    },
    fontFamily: {
      serif: "Raleway, sans-serif",
      display: "Sacramento, cursive"
    },
    extend: {
      lineHeight: {
        11: "3rem",
        12: "3.5rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
