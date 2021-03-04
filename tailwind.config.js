module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      lg: "0.5rem",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      smTop: "0px -1px 0px 1px rgba(0, 0, 0, 0.05)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    colors: {
      black: "#000",
      white: "#fff",
    },
    extend: {},
    fontFamily: {
      title: ["Barlow", "sans-serif"],
    },
    minHeight: {
      md: "200px",
    },
    plugins: [],
    screens: {
      xxxl: { min: "2040px" },
      // => @media (min-width: 2040px) { ... }

      xxl: { max: "2040px" },
      // => @media (max-width: 2040px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      minxl: { min: "1025px" },
      // => @media (min-width: 1025px) { ... }

      minlg: { min: "769px" },
      // => @media (max-width: 769px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      minmd: { min: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
