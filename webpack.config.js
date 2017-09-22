const path = require('path');

module.exports = {
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      './assets/js/main.js',
    ]
  },
  output: {
    filename: 'public/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
      test: [/\.jsx?$/],
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: 'es2015'
      }
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
