/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      screens: {
        'intermediate': {'min': '768px', 'max': '1023px'}, // النطاق الوسيط من 768px إلى 1023px فقط
      },
      colors: {
        primary: "#4A3D8B",
        secondary: "#1DBFFE",
        accent: "#9747FF",
        darkOverlay: "rgba(0,0,0,0.44)",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        'cairo-400': 400,
        'cairo-600': 600,
        'cairo-700': 700,
        'poppins-400': 400,
        'poppins-500': 500,
        'poppins-700': 700,
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '36': '36px',
      },
    },
  },
  plugins: [],
};