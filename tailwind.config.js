/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      screens: {
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        titleFont: "Roboto",
        bodyFont: "Poppins",
        
      },
      colors:{
        amazon_light:"#232f3e",
        amazon_yellow:"#febd69",
        amazon_blue:"#37475a",
        lightText:"#ccc",
        whiteText:"#f0f2f2",
        footerBottom:"#131a22"
      },
      boxShadow:{

      }
    },
  },
  plugins: [],
}