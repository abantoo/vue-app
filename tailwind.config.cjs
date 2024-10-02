/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      payton: ['"Paytone One", "sans-serif"'],
      "spicy-rice": ['"Spicy Rice", "serif"'],
      anton: ['"Anton", "sans-serif"'],
      "sixtyfour-convergence": ['"Sixtyfour Convergence", "sans-serif"'],
      "archivo-black": ['"Archivo Black", "sans-serif"'],
    },
    extend: {
      animation: {
        "bounce-once": "bounce 1s",
        "ping-once": "ping 1s",
        "slow-bounce": "bounce 1.5s infinite",
        vote: "vote 1.5s ease-in-out",
        "vote-infinite": "vote 1s infinite",
      },
      keyframes: {
        vote: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-10deg)",
          },
          "75%": {
            transform: "rotate(10deg)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
