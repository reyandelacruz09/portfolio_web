/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic surfaces - adapt based on dark/light via CSS variables
        app: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          alt: "rgb(var(--color-bg-alt) / <alpha-value>)",
          card: "rgb(var(--color-card) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
