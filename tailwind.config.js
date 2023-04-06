/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",    
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#002F46',
        "primary-light": '#0085C6',
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

