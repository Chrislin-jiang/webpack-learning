import test from './test';
const loadSum = () => {
  import('./sum').then(module => {
    console.log(module.default(6, 9))
  })
}

const btn = document.getElementById("btn");
btn.addEventListener("click", loadSum, false);

console.log("test", test);