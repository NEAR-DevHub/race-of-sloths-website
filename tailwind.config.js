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
        _blue: "#5b75f0",
        _secondary: "#919399",
      },
    },
  },
  plugins: [],
};
