module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: {
        1: "#0F4F34",
        2: "#046645",
        3: "#067A52",
        4: "#00A064",
        5: "#87E9A9",
        6: "#3FC283",
      },
      white: "#f1f2ed",
      black: "#0e0e0e",
      red: "#B8293D",
    },
    screens: {
      md: { max: "1024px" },
      sm: { max: "650px" },
      xsm: { max: "450px" },
    },
  },
  important: true,
  plugins: [],
};
