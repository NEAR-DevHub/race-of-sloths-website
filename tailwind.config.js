/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        _main: "#101010",
        _green: "#bdf02d",
        _red: "#f05151",
        _ticker_red: "#FF5555",
        _ticker_blue: "#5B75F0",
        _yellow: "#FFD700",
        _blue: "#5b75f0",
        _yellow: "#FFD400",
        _shadow: "#313131",
        _secondary: "#919399",
        _rust: "#C08235",
        _dark_blue: "#161b22",
      },
    },
  },
  plugins: [],
};
