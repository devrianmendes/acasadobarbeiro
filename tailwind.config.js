/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    colors: {
      mainColor: "#9D9570",
      darkGray: "#222222",
      darkWhite: "#fafafa",
      textColor: "#3B3B3B",
      darkYellow: "#422006"
    },

    extend: {
      fontFamily: {
        'textFont': ['Cairo', 'sans-serif'],
        'titleFont': ['Protest Strike', 'sans-serif'],
        'testFont': ['Protest Riot', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
