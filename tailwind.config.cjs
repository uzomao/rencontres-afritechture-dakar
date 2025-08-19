/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F5E6D3',
          DEFAULT: '#A0522D', // "brand" will resolve to this
          dark: '#4B2E2A',
        },
        accent: '#FF6347', // you can also define flat names
      },
    },
  },
  plugins: [],
}

