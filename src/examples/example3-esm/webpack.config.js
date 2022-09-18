const path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  mode: 'none'
}
// npx webpack --entry ./index.js --output-path build --mode=none