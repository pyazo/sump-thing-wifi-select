// This webpack config applies to production code
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('HappyPack');

const rules = require('./rules');

module.exports = {
  mode: 'production',
  entry: { main: './frontend/js/main.js' },
  output: {
    publicPath: '/',
    path: path.join(process.cwd(), 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.join(process.cwd(), 'frontend', 'js'),
      img: path.join(process.cwd(), 'frontend', 'img'),
    },
  },
  module: { rules },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
  plugins: [
    new HappyPack({
      threads: 4,
      loaders: ['babel-loader'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      files: {
        js: ['main.js'],
      },
    }),
  ],
};
