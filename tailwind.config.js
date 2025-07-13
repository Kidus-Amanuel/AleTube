// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#4F46E5",
          indigoHover: "#4338CA",
          background: "#F9FAFB",
          text: "#111827",
          gray: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
}
