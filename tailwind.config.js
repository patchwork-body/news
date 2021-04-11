module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'media',

  theme: {
    colors: {
      white: '#ffffff',
      cultured: '#f4f5f5',
      canary: '#fff89d',
      'imperial-red': '#ff2835',
    },
  },

  variants: {
    extend: {
      boxShadow: ['disabled'],
      opacity: ['disabled'],
    },
  },

  plugins: [],
};
