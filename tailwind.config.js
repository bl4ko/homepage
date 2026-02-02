/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--background-primary)",
        secondary: "var(--background-secondary)",
        tertiary: "var(--background-tertiary)",
        green: "var(--color-green)",
        gray: "var(--color-gray)",
        black: "var(--color-black)",
        blue: "var(--color-blue)",
        dark: "var(--color-dark)",
        darker: "var(--color-darker)",
        yellow: "var(--color-yellow)",
        red: "var(--color-red)",
        aqua: "var(--color-aqua)",
        cyan: "var(--color-cyan)",
        purple: "var(--color-purple)",
        "grass-teal": "var(--color-grass-teal)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
      },
      screens: {
        xss: "320px",
        xs: "450px",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80, 230, 217, 0.4)",
      },
    },
  },
  plugins: [],
};
