// webpack.config.js
var path = require('path');

module.exports = {
    entry: {
        index: './src/a.js'
    },
    devtool: 'none',
    output: {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash:4].js',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    mode: 'development',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
};