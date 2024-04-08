/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik"],
        dm: ["DM Sans"],
      },
      colors: {
        "task-white": "#f5f5f7",
        "task-white1": "#AFAFAF",
        "task-black": "#6e6e73",
        "task-black2": "#2d2e32",
      },
    },
  },
  plugins: [],
};
