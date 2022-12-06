const test = require('./test');

console.log("test", test);

const loadSum = () => {
  console.log("click load Sum");
  const sum = require('./sum');
  console.log(sum(6, 9));
}

const btn = document.getElementById("btn");
btn.addEventListener("click", loadSum, false);
