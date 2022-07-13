/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#313131",
        },
        blue: {
          1: "#00173E",
        },
        green: {
          1: "#44D695",
        },
      },
      fontSize: {
        46: ["46px", "69px"],
      },
      padding: {
        25: "100px",
      },
      maxWidth: {
        1440: "1440px",
      },
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        1: "linear-gradient(122.65deg, #1B67A5 16.75%, #44D695 82.53%)",
        2: "linear-gradient(180deg, #0121AE 2%, #44D695 73.61%)",
      },
    },
  },
  plugins: [],
};
