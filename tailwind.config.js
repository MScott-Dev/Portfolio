/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Offwhite: "#fcfffd",
        Offgray: "#a0acb2",
        teal: "#6acdba",
        OffBlack: "#121516",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
