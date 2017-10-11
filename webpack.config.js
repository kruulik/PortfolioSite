var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './assets/js/main.js',
  output: {
    filename: 'main.js',
    path: '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  devServer: {
    contentBase: '/dist'
  },
  plugins: [
    new ExtractTextPlugin("./public/style/main.css")
  ],
  resolve: {
    extensions: ['.js', '.jsx', '*', '.css', '.scss']
  }
};
