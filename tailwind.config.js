/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        ReformaGrotesk: [
          '"ReformaGrotesk"',
          '"Montserrat"',
          "sans-serif",
        ],
        Montserrat: ['"Montserrat"', "sans-serif"],
        Muller: ['"Muller"'],
      },
      screens: {
        'lg-plus': '992px', // Custom breakpoint for 992px
      },
      colors: {
        "graphite-gray": "#313245",
        "light-brown": "#B99984",
        "light-gray": "#313245B2",
        "light-white": "#FFFFFFB2",
        "border-color": "#B9998469",
        "gray": "#3D3D3D"
      },
      lineHeight: {
        6.5: "26px",
      },
      letterSpacing: {
        wide: "2px",
      },
      padding: {
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
