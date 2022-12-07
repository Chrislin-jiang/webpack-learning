const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './index.js',
    test: './test.js'
  },
  output: {
    path: path.resolve(__dirname, 'build-eval-cheap-module-source-map'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: [{
          // loader: MiniCssExtractPlugin.loader
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // sourceMap: true,
            modules: false
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        // {
        //   loader: 'less-loader',
        //   options: {
        //     sourceMap: true,
        //     lessOptions: {
        //       javascriptEnabled: true
        //     }
        //   }
        // }
      ]
    }, {
      test: /\.(jpe?g|png|gif|ico|svg)$/,
      exclude: /node_modules/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 1 * 1024
        }
      },
      // generator: {
      //   // publicPath:`../${buildTargetDir}/`,
      //   filename: '[contenthash:10].[name][ext]'
      // },
      // loader: 'image-webpack-loader',
      // options: {
      //   disable: false
      // },
    }, ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash:8].css',
    //   // chunkFilename: cssPath,
    //   ignoreOrder: false // Enable to remove warnings about conflicting order
    // }),
    new HtmlWebpackPlugin({
      template: './template.html'
    })
  ],
  mode: 'development',
  // devtool: 'source-map',
  devtool: 'eval-cheap-module-source-map',
  optimization: {
    runtimeChunk: {
      name: 'runtime~single'
    }
  },
  devServer: {
    // open: true,
    hot: true,
    port: 9000,
  }
}