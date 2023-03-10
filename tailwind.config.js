/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        GradientStart: "hsl(6, 100%, 80%)",
        GradientEnd:"hsl(335, 100%, 65%)",
        PaleBlue: "hsl(243, 100%, 93%)",
        GrayishBlue: "hsl(229, 7%, 55%)",
        DarkBlue: "hsl(228, 56%, 26%)",
        VeryDarkBlue:" hsl(229, 57%, 11%)",
      }
    },
  },
  plugins: [],
}
