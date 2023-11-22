const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      linen: "#fbefe7",
      "taupe-gray": "#8c8589",
      black: "#161616",
    },
    extend: {
      width: { avatar: "68px", "branding-logo": "226px" },
      height: { avatar: "68px", "branding-logo": "82px" },
      padding: {
        4.5: "18px",
      },
    },
  },
  plugins: [],
};
