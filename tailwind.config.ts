import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            sans: ['Lato', 'Roboto', 'sans-serif'],
            serif: ['Cinzel', 'serif'],
        },
        colors: {
            transparent: 'transparent',
            cello: {
                '50': '#f4f6fb',
                '100': '#e8edf6',
                '200': '#ccd9eb',
                '300': '#9fb9da',
                '400': '#6b94c5',
                '500': '#4977ae',
                '600': '#375d92',
                '700': '#2d4b77',
                '800': '#294163',
                '900': '#24354f',
                '950': '#192538',
            },
            'royal-light-blue': 'rbg(78, 117, 175)',
            'buttered-rum': {
                '50': '#faf9ec',
                '100': '#f2f0cf',
                '200': '#e7e2a1',
                '300': '#d9cc6b',
                '400': '#cdb742',
                '500': '#bea234',
                '600': '#997928',
                '700': '#836125',
                '800': '#6e4f25',
                '900': '#5e4225',
                '950': '#362312',
            },
            laser: {
                '50': '#faf8f2',
                '100': '#f3f0e1',
                '200': '#e6dfc2',
                '300': '#d5c99c',
                '400': '#c4af74',
                '500': '#b79a58',
                '600': '#aa874c',
                '700': '#8d6d41',
                '800': '#735939',
                '900': '#5d4931',
                '950': '#322518',
            },
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            zinc: colors.zinc,
        },
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    darkMode: ['selector', 'class'],
    // plugins: [require("tailwindcss-animate")],
} satisfies Config
