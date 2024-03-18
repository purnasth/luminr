/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "radial-gradient-orange":
          "radial-gradient(circle, rgba(255,217,184,1) 0%, rgba(255,159,82,1) 100%)",
        "radial-gradient-blue":
          "radial-gradient(circle, rgba(184,215,255,1) 0%, rgba(82,130,255,1) 100%)",
        "radial-gradient-red":
          "radial-gradient(circle, rgba(255,184,184,1) 0%, rgba(255,82,82,1) 100%)",
        "radial-gradient-yellow":
          "radial-gradient(circle, rgba(255,255,184,1) 0%, rgba(255,255,82,1) 100%)",
      },
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
        "gradient-orange": ["rgba(255, 165, 0, 1)", "rgba(255, 165, 0, 0)"],
      },

      container: {
        screens: {
          sm: "100%", // Set width to 100% on small screens
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
