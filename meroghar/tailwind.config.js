/** @type {import('tailwindcss').Config} */
module.exports = {
//the purgr property is used to remove unused css from the final build
  purge: [
    './pages/**/*.tsx',
    // add more paths
    './components/**/*.tsx',
],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
