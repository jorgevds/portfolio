module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    extend: {},
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "2rem",
      full: "9999px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      smTop: "0px -1px 0px 1px rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      formField: "inset 0 -5px 3px -3px #75161e",
    },
    colors: {
      black: "#000",
      purple: "#2d151e",
      burgundy: "#75161e",
      burgundyDark: "#510f15",
      white: "#fff",
      mauve: "#c0a4a1",
      blue: "hsl(203, 33%, 37%)",
      blueLight: "hsl(190, 50%, 45%)",
      blueDark: "#2e4a5a",
    },
    fontFamily: {
      title: ["Newsreader", "serif"],
      body: ["sans-serif"],
    },
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    minHeight: {
      0: "0",
      sm: "100px",
      md: "200px",
      lg: "400px",
      xl: "75vh",
      screen: "100vh",
      full: "100%",
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
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      translate: ["responsive", "hover", "focus", "active"],
      outline: ["responsive", "hover", "focus", "active"],
      boxShadow: ["responsive", "hover", "focus", "active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
