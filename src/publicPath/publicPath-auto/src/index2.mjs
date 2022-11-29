// index2.mjs
const test = new URL(import.meta.url.replace('%3F', '?')).searchParams.get('test'); // 5
console.log("test", test)
console.log("index2", import.meta.url);

console.log('index2---');