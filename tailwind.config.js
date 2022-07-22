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
          4: "#052965",
        },
        green: {
          1: "#44D695",
        },
        light: {
          1: "#FBFBFB",
          2: "#FAFAFA",
        },
        gray: {
          1: "#EAEAEA",
          2: "#C4C4C4",
          3: "#969696",
          4: "#B1B1B1",
          5: "#828282",
          6: "#8D8D8D",
          7: "#CCCCCC",
          8: "#B9B9B9",
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
        5: "linear-gradient(161.05deg, #1B67A4 0.68%, #44D695 98.88%)",
        6: "linear-gradient(180deg, #1B67A4 0%, #5CD7A5 100%)",
        7: "linear-gradient(135.32deg, #1B67A5 11.24%, #44D695 91.21%)",
        8: "linear-gradient(0deg, #44D695 100%, #44D695 100%)",
        9: "linear-gradient(0deg, #FFFFFF 100%, #FFFFFF 100%)",
      },
      boxShadow: {
        1: "0px 10px 25px rgba(0, 0, 0, 0.05)",
        2: "0px 4px 40px rgba(0, 0, 0, 0.11)",
        3: "-4px 4px 4px rgba(0, 0, 0, 0.08)",
        4: "0px 4px 42px rgba(0, 0, 0, 0.06)",
      },
      keyframes: {
        colorChange: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        colorChange: "colorChange 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
