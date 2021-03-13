const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = require("./webpack.config.base")

module.exports = {
  ...base,
  mode: 'development',
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      title: "XDML",
      template: 'src/assets/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        }, "css-loader"],
      },
    ],
  },
};