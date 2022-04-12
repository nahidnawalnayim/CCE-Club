module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-light": "url('/img/herolight.png')",
        "hero-dark": "url('/img/herodark.png')",
        "floating-cogs": "url('/img/floating-cogs.svg')",
      },
    },
  },
  plugins: [],
};
