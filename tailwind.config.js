module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Cabin Condensed',
    },
    backgroundImage: (theme) => ({
      'wave-pattern': 'url(\'http://www.newdesignfile.com/postpic/2012/02/cartoon-water-texture_133979.jpg\')',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#4AA9CC',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
