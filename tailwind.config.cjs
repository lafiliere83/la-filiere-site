/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        punk: {
          red: "#FF3366",
          redDark: "#E62E5C",
        },
        ink: {
          950: "#0A0A0A",
          900: "#111111",
          800: "#181818",
          700: "#222222",
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', "system-ui", "sans-serif"],
        ui: ['"Outfit"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      boxShadow: {
        glow: "0 10px 50px rgba(255,51,102,0.12)"
      }
    },
  },
  plugins: [],
}
