// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // syntax: 'postcss-less',
  plugins: {
    precss: {},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-px2rem": {
      remUnit: 12
    },
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    cssnano: {}
  }
};
