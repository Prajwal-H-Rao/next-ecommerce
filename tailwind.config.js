/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "nav":{
          dark:'#B76952',
          light:'#F0DBDB',
          DEFAULT:"#FEFFFF"
        }
      },
    },
  },
  plugins: [],
};
