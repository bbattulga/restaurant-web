module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-1": "url('/images/bg1.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
