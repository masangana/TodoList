const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'inline-source-map',

  devServer: {

    static: './dist',

  },

  plugins: [

    new HtmlWebpackPlugin({

        template: './src/index.html',

    }),

  ],

  module: {

    rules: [

      {

        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      },

    ],

  },

  optimization: {

    runtimeChunk: 'single',

  },

};