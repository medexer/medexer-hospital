/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",    
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#181824',
        "primary-light": '#1F1E2E',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}

