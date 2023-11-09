/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        widthLoginForm: "29rem",
        'photo': '400px'
      },
      colors: {
        "body": "#DCDCDC",
        "batal": "#7E0303"
      },
      height: {
        'headbar': '10%',
        'body': '90%',
        'photo': '450px'
      }
    },
  },
  plugins: [],
};
