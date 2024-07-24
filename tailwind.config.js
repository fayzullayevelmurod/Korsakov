/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        ReformaGroteskLight: [
          '"Reforma Grotesk Light W08 Rg"',
          // '"ReformaGroteskDemiC"',
          '"Montserrat"',
          "sans-serif",
        ],
        ReformaGroteskMedium: [
          '"Reforma Grotesk W01 Medium"',
          // '"ReformaGroteskDemiC"',
          '"Montserrat"',
          "sans-serif",
        ],
        Montserrat: ['"Montserrat"', "sans-serif"],
        // Muller: ['"Muller"', "sans-serif"],
        Muller: ['"Muller-Regular18"', "sans-serif"],
        Mullerr: ['"Muller"', "sans-serif"],
        MullerLight: ['"Muller W00 Light"', "sans-serif"],
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
