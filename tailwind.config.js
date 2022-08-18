/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-text": "#242e4c",
      "secondary-text": "#2d2f43",
    },
    backgroundImage: {
      " hero_pattern": "url('/src/assets/BankAppDemo.png)",
    },
  },
  plugins: [],
};
