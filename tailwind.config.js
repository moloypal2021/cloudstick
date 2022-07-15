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
          2: "#0333CE",
          3: "#5C8AFF",
        },
        green: {
          1: "#44D695",
        },
        light: {
          1: "#FBFBFB",
        },
        gray: {
          1: "#EAEAEA",
        },
      },
      fontSize: {
        42: ["42px", "63px"],
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
        3: "linear-gradient(159.08deg, #1B67A4 24.15%, #44D695 100%)",
      },
      boxShadow: {
        1: "0px 10px 25px rgba(0, 0, 0, 0.05)",
        2: "0px 4px 40px rgba(0, 0, 0, 0.11)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
