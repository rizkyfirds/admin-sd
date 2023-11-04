/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        widthLoginForm: "29rem",
      },
      colors: {
        "body": "#DCDCDC",
      },
    },
  },
  plugins: [],
};
