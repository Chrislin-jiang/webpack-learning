/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      /** lin
      const sum = (a, b) => {
        return a + b;
      }
      export default sum;
      export const test = 'test';
       */
      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "test": () => (/* binding */ test)
        /* harmony export */
      });
      const sum = (a, b) => {
        return a + b;
      }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);
      const test = 'test';


      /***/
    })
/******/]);
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
      /******/
    }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
    };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    __webpack_require__.r(__webpack_exports__);

    /** lin
     import * as s from './sum';
     */
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

    /** lin
    console.log(sum(6, 9));
    console.log("test", test);
    console.log("s", s)
     */
    console.log((0, _sum__WEBPACK_IMPORTED_MODULE_0__["default"])(6, 9));
    console.log("test", _sum__WEBPACK_IMPORTED_MODULE_0__.test);
    console.log("s", _sum__WEBPACK_IMPORTED_MODULE_0__)
  })();

  /******/
})()
  ;
