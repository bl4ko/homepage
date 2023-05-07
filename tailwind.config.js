/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#141d2b",
                secondary: "#1a2332",
                tertiary: "#111927",
                green: "#9fef00",
                grey: "#a4b1cd",
                black: "#141d2b",
                dark: "#1a2332",
                darker: "#111927",
                yellow: "#ffaf00",
                red: "#ff3e3e",
                aqua: "#2ee7b6",
                purple: "#9f00ff",
                grassTeal: "#88ccca",
            },
            backgroundColor: {
                'grassTeal': '#88ccca',
            },
            screens: {
                xss: '320px',
                xs: '450px',
            },
        },
    },
    plugins: [],
}

