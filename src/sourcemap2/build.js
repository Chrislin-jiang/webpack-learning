const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function build1() {
  return webpack({
    entry: {
      index: './index.js',
      test: './test.js'
    },
    output: {
      path: path.resolve(__dirname, 'build-eval-cheap-module-source-map'),
      filename: '[name].js',
      clean: true
    },
    module:{
      rules:[
        {
          test: /\.(css)$/,
          use: [
            {
              // loader: MiniCssExtractPlugin.loader
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
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
        }
      ]
    },
    plugins: [
      // new MiniCssExtractPlugin({
      //   filename: '[name].css',
      //   // chunkFilename: cssPath,
      //   ignoreOrder: false // Enable to remove warnings about conflicting order
      // })
    ],
    mode: 'none',
    devtool: 'eval-cheap-module-source-map'
  })
}

build1()
  .run((err, stat) => {
    const startTime = stat.startTime
    const endTime = stat.endTime
    console.log("构建时间", endTime - startTime);
    // console.log("构建时间", stat.endTime - stat.startTime);
  })

// build1()
//   .run((err, stats) => {
//     const time = stats.toJson().time;
//     console.log("构建时间", time);
//   })