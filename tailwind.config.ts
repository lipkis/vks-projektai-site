import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f4f8',
          100: '#dce6ef',
          200: '#b3c7d9',
          300: '#85a3bd',
          400: '#5c7f9c',
          500: '#3d6180',
          600: '#2d4d6a',
          700: '#1e3a52',
          800: '#162235',
          900: '#0f1b2d',
        },
        gold: {
          300: '#e8c87a',
          400: '#d4a84b',
          500: '#c47820',
          600: '#a85f0a',
        },
      },
      fontFamily: {
        garamond: ['var(--font-garamond)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
