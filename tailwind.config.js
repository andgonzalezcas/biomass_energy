/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pine-forest': "url('./images/pine-forest-in-the-mist_1500x1000_xtrafondos.com.jpg')",
        'mushromm': "url('./images/mushromms-glowing_3840x2553_xtrafondos.com.jpg')"
      }
    }
  },
  plugins: [],
}
