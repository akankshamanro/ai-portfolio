/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f", // Deep Navy
        secondary: "#112240", // Light Navy
        accent: "#64ffda", // Teal/Cyan (Classic corporate tech accent) - OPTION 1
        // OR
        // accent: "#ccd6f6", // Lightest Slate (More subtle)
        "navy-light": "#233554",
        "slate-light": "#8892b0",
        "slate-lighter": "#a8b2d1",
        "white-off": "#e6f1ff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
