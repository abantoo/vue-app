/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: { "bounce-once": "bounce 1s", "ping-once": "ping 1s" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
