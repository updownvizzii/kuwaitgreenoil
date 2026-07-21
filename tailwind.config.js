/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Libre Caslon Display"', 'serif'],
        display: ['"Libre Caslon Display"', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#b8923f',
          light: '#e0bf78',
          deep: '#8b6f33',
        },
      },
    },
  },
  plugins: [],
}
