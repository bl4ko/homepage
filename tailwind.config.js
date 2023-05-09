/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--background-primary)',
                secondary: 'var(--background-secondary)',
                tertiary: 'var(--background-tertiary)',
                green: "var(--color-green)",
                grey: "var(--color-grey)",
                black: "var(--color-black)",
                dark: "var(--color-dark)",
                darker: "var(--color-darker)",
                yellow: "var(--color-yellow)",
                red: "var(--color-red)",
                aqua: "var(--color-aqua)",
                purple: "var(--color-purple)",
                grassTeal: "var(--color-grass-teal)",
                textPrimary: "var(--text-primary)",
            },
            screens: {
                xss: '320px',
                xs: '450px',
            },
        },
    },
    plugins: [],
}

