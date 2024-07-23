/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        ReformaGroteskLight: [
          '"ReformaGroteskDemiC"',
          '"Montserrat"',
          "sans-serif",
        ],
        Montserrat: ['"Montserrat"', "sans-serif"],
        Muller: ['"Muller"', "sans-serif"],
      },
      colors: {
        "graphite-gray": "#313245",
        "light-brown": "#B99984",
        "light-gray": "#313245B2",
        "light-white": "#FFFFFFB2",
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
