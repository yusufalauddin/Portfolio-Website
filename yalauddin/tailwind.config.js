/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'smart-password': "url('/src/smartpassword.png')",
        'yalauddin-logo': "url('/src/transparentyalauddin2.png')",
        'chat-app': "url('/src/javachatapp.png')",
        'osm-app': "url('/src/osm map program.png')"
      }
    },
  },
  plugins: [],
}
