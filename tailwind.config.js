/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--background)',
        secondary: 'var(--foreground)',
        tertiary: 'var(--yellow)',
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-bebas-neue)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 