// const sum = require('./sum')
import sum, { test } from './sum';
import * as s from './sum';

console.log(sum(6, 9));
console.log("test", test);
console.log("s", s)