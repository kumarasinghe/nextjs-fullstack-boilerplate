/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                foreground: "var(--color-foreground)",
                accent: {
                    DEFAULT: "var(--color-accent)",
                    light: "var(--color-accent-light)",
                    dark: "var(--color-accent-dark)",
                    foreground: "var(--color-accent-foreground)",
                },
                base: {
                    DEFAULT: "var(--color-base)",
                    50: "var(--color-base-50)",
                    100: "var(--color-base-100)",
                    200: "var(--color-base-200)",
                    300: "var(--color-base-300)",
                    400: "var(--color-base-400)",
                    500: "var(--color-base-500)",
                    600: "var(--color-base-600)",
                    700: "var(--color-base-700)",
                    800: "var(--color-base-800)",
                    900: "var(--color-base-900)",
                    950: "var(--color-base-950)",
                },
            },
        },
    },
    plugins: [],
};
