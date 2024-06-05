/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://mitomo.eu/wp-content/uploads/2016/08/placeholder_5.jpg')",
      },
    },
  },
  plugins: [],
};
