// Webpack config file
module.exports = {
  entry: './assets/js/app.js',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'jsx-loader'
      }
    ]
  },
};

