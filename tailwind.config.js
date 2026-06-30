/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FAF8F5',
        baseAlt: '#F2EDE6',
        ink: '#2B2A28',
        inkSoft: '#6B6862',
        accent: '#A67C52',
        accentSoft: '#C9A989',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.02em',
        wide3: '0.04em',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
