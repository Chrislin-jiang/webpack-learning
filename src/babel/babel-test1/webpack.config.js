const path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
          options: {
            // presets: [
            //     ['@babel/preset-env', {
            //         targets: {
            //             browser: ['> 1%']
            //         }
            //     }]
            // ],
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "30",
                    "safari": "11.1"
                  },
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
// npx webpack --entry ./index.js --output-path build --mode=none