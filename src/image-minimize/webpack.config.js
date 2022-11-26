const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build3-test'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    }, {
      test: /\.(jpe?g|png|gif|ico|svg)$/,
      exclude: /node_modules/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024
        }
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
  ],
  mode: 'production',
  optimization: {
    minimizer: [
      new ImageminPlugin({
        // disable: process.env.NODE_ENV === 'development',
        // jpegtran: { // jpeg
        //   quality: 70,
        // }
        pngquant: {
          quality: '65-80'
        },
        jpegtran: { // jpeg
          quality: 65,
        },
        gifsicle: { // gif
          interlaced: true,
          optimizationLevel: 3,
        },
      }),
    ],
    runtimeChunk: {
      name: 'runtime~single'
    }
  }
}