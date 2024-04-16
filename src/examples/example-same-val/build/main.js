/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(2);

const test = 'test1-test';
const test1 = 'test1';

console.log("test1---------------");
console.log("test1-test", test);
console.log("test1", test1);

module.exports = {
    test,
    test1
}

/***/ }),
/* 2 */
/***/ ((module) => {

const test = 'test2-test';
const test2 = 'test2';

console.log("test2-----------------");
console.log("test2-test", test);
console.log("test2", test2);

module.exports = {
    test,
    test2
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// import './test1';
// import './test2';
__webpack_require__(1);

})();

/******/ })()
;