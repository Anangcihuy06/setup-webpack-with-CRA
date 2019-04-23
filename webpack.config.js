var path = require("path");
var webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MinCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  devtool: "inline-source-map",
  entry: ["webpack-hot-middleware/client", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "Bus Booking in Africa"
    }),
    new MinCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.(scss|sass)$/,
        use: [MinCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
