const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
    hash: true,
    title: 'Webpack Example App',
    header: 'Webpack Example Title',
    metaDesc: 'Webpack Example Description',
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
        new MiniCssExtractPlugin()
  ],
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [
     { test: /\.txt$/, use: 'raw-loader' },
     {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
  ]}
}
