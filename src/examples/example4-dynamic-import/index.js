import('./sum').then(module => {
  console.log(module.default(6, 9))
})