const { green, default: colors } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-once": "bounce 1s",
        "ping-once": "ping 1s",
        "slow-bounce": "bounce 1.5s infinite",
        vote: "vote 1.5s ease-in-out",
        "vote-infinite": "vote 1s infinite",
        disco: "disco 2s infinite ease-in-out",
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

        disco: {
          "0%": {
            fill: "red",
          },
          "10%": {
            fill: "blue",
          },
          "20%": {
            fill: "emerald",
          },
          "30%": {
            fill: "orange",
          },
          "40%": {
            fill: "lime",
          },
          "50%": {
            fill: "cyan",
          },
          "60%": {
            fill: "lime",
          },
          "70%": {
            fill: "green",
          },
          "80%": {
            fill: "emerald",
          },
          "80%": {
            fill: "yellow",
          },
          "100%": {
            fill: "red",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
