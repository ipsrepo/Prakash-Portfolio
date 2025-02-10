/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
    },
    colors: {
      white: "#ffffff",
      primary: "#111c44",
      // 'primary': '#1b2559',
      "pri-font": "#5c617e",
      "sec-font": "#a3aed0",
      line: "#cfd4db",
      light: "#f4f7fe",
    },
    fontSize: {
      xs: "13px",
      sm: "16px",
      md: "18px",
      l: "20px",
      xl: "22px",
      xxl: "26px",
    },
    fontWeight: {
      semi: 400,
      bold: 600,
      bolder: 700,
      boldest: 800,
    },
    fontFamily: {
      IBM: ["IBM Plex Sans", "sans-serif"],
    },
    letterSpacing: {
      wide: ".87px",
      wider: "1.5px",
      widest: "2.5px",
    },
    extend: {
      dropShadow: {
        white: "4px 8px 16px rgba(17, 4, 122, 0.12)",
        dark: "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      zIndex: {
        999: "999",
      },
    },
  },
  plugins: [],
};
