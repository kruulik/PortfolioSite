var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './assets/js/main.js',
  output: {
    // publicPath: '/public/',
    filename: 'public/[name].js'
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
  plugins: [
    new ExtractTextPlugin("./public/style/main.css")
  ],
  resolve: {
    extensions: ['.js', '.jsx', '*', '.css', '.scss']
  }
};
