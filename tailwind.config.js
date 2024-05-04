/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        neutral: {
          50: "#F3F2F2",
          100: "#E6E6E5",
          200: "#CECDCC",
          300: "#B5B3B2",
          400: "#9D9A99",
          500: "#84817F",
          600: "#6A6766",
          700: "#4F4D4C",
          800: "#353433",
          900: "#1A1A19",
        },
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
