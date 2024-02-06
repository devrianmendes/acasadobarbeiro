/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: "#9D9570",
      darkGray: "#222222",
      darkWhite: "#fafafa"
    },
    extend: {
      backgroundImage: {
        'manCuttingHair': "url('src/assets/manCuttingHair1000.jpg')",
        '50': '200px'
      },
      
    },
  },
  plugins: [],
};
