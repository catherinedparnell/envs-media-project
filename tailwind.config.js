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
      blue: '#4AA9CC',
      dark: '#435058',
      yellow: '#FAF8D4',
      red: '#F25F5C',
      offwhite: '#FFFFFC',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      blue: '#4AA9CC',
      dark: '#435058',
      yellow: '#FAF8D4',
      red: '#F25F5C',
      offwhite: '#FFFFFC',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
