/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      xll: "1440px"
    },
    colors: {
      blue: "#3232FB",
      black: "#1A1A1A",
      white: "#FFFFFF",
      gray: "#EDE9FF",
      yellow: "#E8FFA8"
    },
    extend: {}
  },
  plugins: []
};
