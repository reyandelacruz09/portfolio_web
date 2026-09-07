/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          alt: "rgb(var(--color-bg-alt) / <alpha-value>)",
          card: "rgb(var(--color-card) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)",
        },
        accent: {
          cyan: "#06b6d4",
          teal: "#14b8a6",
          violet: "#8b5cf6",
          purple: "#a855f7",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-up-delay-1": "slide-up 0.6s ease-out 0.1s forwards",
        "slide-up-delay-2": "slide-up 0.6s ease-out 0.2s forwards",
        "slide-up-delay-3": "slide-up 0.6s ease-out 0.3s forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.3)",
        "glow-violet": "0 0 20px rgba(139, 92, 246, 0.3)",
        "glow-lg": "0 0 40px rgba(6, 182, 212, 0.2), 0 0 80px rgba(139, 92, 246, 0.1)",
      },
    },
  },
  plugins: [],
};
