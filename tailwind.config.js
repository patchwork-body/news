module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'media',

  theme: {
    colors: {
      white: '#ffffff',
      cultured: '#f4f5f5',
      canary: '#fff89d',
      'lemon-yellow': '#ffcd57',
      'imperial-red': '#e93a3a',
      'eerie-black': '#242424',
    },
  },

  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['hover'],
      boxShadow: ['disabled'],
      opacity: ['disabled'],
    },
  },

  plugins: [],
};
