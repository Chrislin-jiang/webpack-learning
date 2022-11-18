const webpack = require('webpack')
const path = require('path')

const compiler = webpack({
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  mode: 'none'
})

compiler.run((err, stats) => {
  const startTime = stats.startTime
  const endTime = stats.endTime
  console.log("构建时间", endTime - startTime);
})

// webpack({
//   // [配置对象](/configuration/)
//   entry: './index.js',
//   output: {
//     path: path.resolve(__dirname, 'build')
//   },
//   mode: 'none'
// }, (err, stats) => { // [Stats Object](#stats-object)
//   if (err || stats.hasErrors()) {
//     // [在这里处理错误](#error-handling)
//   }
//   const startTime = stats.startTime
//   const endTime = stats.endTime
//   console.log("构建时间", endTime - startTime);
// });