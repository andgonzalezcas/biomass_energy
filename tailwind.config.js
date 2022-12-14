/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mushromm': "url('./images/background/mushromms-glowing_3840x2553_xtrafondos.com.jpg')",
        'hydrangeas': "url('./images/background/hydrangeas_3840x2400_xtrafondos.com.jpg')",
        'orange-fall': "url('./images/background/autumn-leaves-in-tree_3840x2400_xtrafondos.com.jpg')",
        'moon': "url('./images/background/moon_3840x2400_xtrafondos.com.jpg')",
        'sunrise-mountains': "url('./images/background/sunrise-in-the-mountains-digital-art_3840x2254_xtrafondos.com.jpg')",
        'swirl-pattern': "url('./images/background/colors-in-swirl-pattern_3840x2160_xtrafondos.com.jpg')"
      },
      colors: {
        'green-10': '#cdd632',
        'green-20': '#7f9b2e',
        'green-30': '#456625',
        'green-40': '#173814',
        'green-50': '#121709',
      },
    }
  },
  plugins: [],
}
