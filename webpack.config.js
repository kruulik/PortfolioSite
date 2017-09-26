const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractScss = new ExtractTextPlugin({
  filename: "public/style/[name].css",
  disable: process.env.NODE_ENV === "development"
});


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
    rules: [{
      test: /\.scss$/,
      use: extractScss.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
        extractScss
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
