/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        inria: ['"Inria Serif"', "serif"],
        rambla: ['"Rambla"', "sans-serif"],
        kalnia: ['"Kalnia"', "sans-serif"],
      },
      colors: {
        "luminr-blue": "#070a0f",
        "luminr-orange": "#DB6332",
        "luminr-white": "#F2F3D9",
      },
    },
  },
  plugins: [],
};
