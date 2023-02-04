/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      phone: "400px",
    },
    extend: {
      fontFamily: {
        gothamBold: "'Gotham-Bold', serif",
        gothamLight: "'Gotham-Light', serif",
        gothamMedium: "'Gotham-Medium', serif",
      },
      boxShadow: {
        tesla: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
