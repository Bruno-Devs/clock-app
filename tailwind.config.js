/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      grey: "#303030",
    },
    fontFamily: {
      primaryFont: [" Inter"],
    },
    extend: {
      backgroundImage: {
        body: "url('/public/assets/desktop/bg-image-daytime.jpg')",
      },
    },
  },
  plugins: [],
};
