/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3D8B",
        secondary: "#1DBFFE",
        accent: "#9747FF",
        darkOverlay: "rgba(0,0,0,0.44)",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        fahkwang: ["Fahkwang", "sans-serif"],
      },
    },
  },
  plugins: [],
};