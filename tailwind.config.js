/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        pingSmall: 'pingSmall 0.9s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        pingSmall: {
          '75%, 100%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
        },
      },
      colors: {
        background: '#f7f7f0',
        primary: '#92aeb3',
        secondary: '#c9c89d',
        tertiary: '#392b2b',
        impact: '#392b2b',
        profileBackground: '#617EC1'
      }
    }
  },
  plugins: []
}
