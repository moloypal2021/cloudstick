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
          2: "#C4C4C4",
          3: "#969696",
          4: "#B1B1B1",
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
        4: "linear-gradient(165.14deg, #1B67A4 -0.17%, #44D695 99.52%)",
      },
      boxShadow: {
        1: "0px 10px 25px rgba(0, 0, 0, 0.05)",
        2: "0px 4px 40px rgba(0, 0, 0, 0.11)",
        3: "-4px 4px 4px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
