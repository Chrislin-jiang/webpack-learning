const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    index: './src/index.mjs',
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
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  optimization: {
    runtimeChunk: {
      name: 'runtime~single'
    }
  },
  // devtool: 'source-map',
  devServer: {
    // open: true,
    hot: true
  }
}