import { orange, zinc } from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
        darkMode: 'class',
        theme: {
            fontSize: {
                xs: 12,
                sm: 14,
                md: 16,
                lg: 18,
                xl: 20,
                '2xl': 24,
                '3xl': 32,
                '4xl': 38,
                '5xl': 42,
                '6xl': 48
            }
        },
        extend: {
            fontFamily: {
                title: ['"Ubuntu"', '"sans - serif"'],
                sans: ['"Inter"', '"sans - serif"']
            },
            colors: {
                grey: zinc,
                primary: orange
            }
        }
    }
};
