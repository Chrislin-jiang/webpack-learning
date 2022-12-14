/**
 * 通过调试运行时代码分析得出

-   1 -> `__webpack_modules__`：是一个数组，存放所有加载到的模块。在此示例中，`__webpack_modules__[0]` 是空的，`__webpack_modules__[1]` 是 sum.js 模块；
-   2 -> `__webpack_module_cache__`：是一个对象，对模块执行结果进行缓存，这样能够保证每个模块只被执行一次；
-   3 -> `__webpack_require__`：是一个函数，作用是加载模块，如果模块第一次被加载，则通过 `__webpack_modules__[moduleId]` 匹配上对应的模块，并进行缓存；如果是已加载的模块，则直接从 `__webpack_module_cache__[moduleId]` 取；
-   4 -> `__webpack_exports__`：是一个对象，存放导出的内容；
-   5 -> IIFE：加载入口模块
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

  module.exports = (a, b) => {
    return a + b
  }
  
  
  /***/ })
  /******/ 	]);
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// （1）检查模块是否存在于缓存中
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
              // （2）如果缓存存在，则直接返回缓存中 moduleId 所对应的 exports 对象
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// （3）如果缓存不存在，则创建一个 module 对象，用于初始化 module 信息，同时创建对应的缓存
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// （4）通过 moduleId 匹配到 __webpack_modules__ 存放的对应的模块，并传入 module, module.exports, __webpack_require__ 参数，执行模块
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// （5）返回 module.exports
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  const sum = __webpack_require__(1)
  
  console.log(sum(6, 9));
  })();
  
  /******/ })()
  ;