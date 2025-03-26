/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#01E477',
        'custom-green-btn': '#266139',
      },
    },
  },
  plugins: [],
}

