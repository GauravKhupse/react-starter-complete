var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
module.exports = {
  entry: "./src/index.js",
  mode: 'none',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
  ],
};