/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        ink: '#000000',
        card: '#101010',
        mutedcard: '#212121'
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif']
      },
      boxShadow: {
        glow: '0 0 80px rgba(222, 219, 200, 0.12)'
      }
    }
  },
  plugins: []
}
