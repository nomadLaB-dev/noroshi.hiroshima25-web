/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "sanfrecce-purple": "var(--sanfrecce-purple)",
                "sanfrecce-purple-light": "var(--sanfrecce-purple-light)",
                "sanfrecce-purple-dark": "#3a226e",
                "sanfrecce-gold": "var(--sanfrecce-gold)",
                "sanfrecce-gold-dark": "var(--sanfrecce-gold-dark)",
            },
            fontFamily: {
                sans: ["var(--font-noto-sans-jp)"],
            },
        },
    },
    plugins: [],
};
