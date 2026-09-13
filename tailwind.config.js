/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mars: {
          bg: '#0A0A0C',
          panel: '#141417',
          red: '#FF2A2A',
          reddim: '#7A1414',
          line: '#2A2A2E',
        },
        fff: {
          black: '#111111',
          green: '#3BFF14',
          red: '#FF3333',
          yellow: '#FFD24D',
          purple: '#B24DFF',
          grey: '#E6E6E6',
        },
      },
      fontFamily: {
        display: ['"Russo One"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
