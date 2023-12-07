/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-seri'],
      'Mulish': ['Mulish', 'sans-seri'],
      
    },
    // colors: {
    //   'secondary' : ['#CCCD34']
    // }
  },
  plugins: [require("daisyui")],
}

