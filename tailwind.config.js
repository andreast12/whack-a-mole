/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        hammer: "url(/src/assets/hammer.png), auto",
        "hammer-hit": "url(/src/assets/hammer-hit.png), auto",
      },
    },
  },
  plugins: [],
};
