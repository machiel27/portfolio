/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      tranform: ['hover'],
      keyframes: {
        breathing: {
          '0%': {
            backgroundColor: '#3B82F6', // Original sky-700 color
          },
          '25%': {
            backgroundColor: '#2563EB', // Blue-600
          },
          '50%': {
            backgroundColor: '#1E40AF', // Blue-800
          },
          '75%': {
            backgroundColor: '#1D4ED8', // Blue-700
          },
          '100%': {
            backgroundColor: '#3B82F6', // Back to original sky-700 color
          },
        },
      },
      animation: {
        breathing: 'breathing 10s infinite',
      },
    },
  },
  plugins: [],
}