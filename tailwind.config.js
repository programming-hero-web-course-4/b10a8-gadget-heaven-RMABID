/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bannerColor: "#9538E2",
      },
      colors: {
        custom: "#9538E2",
      },
    },
  },
  plugins: [require("daisyui")],
};
