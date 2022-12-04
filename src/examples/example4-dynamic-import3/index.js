import test from './test.js';
const loadSum = () => {
  console.log("you click loadSum");
  import('./sum.js').then(module => {
    console.log(module.default(6, 9))
  })
}

const btn = document.getElementById("btn");
btn.addEventListener("click", loadSum, false);

console.log("test", test);