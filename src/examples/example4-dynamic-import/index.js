import test from './test'
import('./sum').then(module => {
  console.log(module.default(6, 9))
})

console.log("test", test);