const webpack = require('webpack')
const path = require('path')

function build1() {
  return webpack({
    entry: {
      index: './index.js',
      test: './test.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
    },
    mode: 'none'
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