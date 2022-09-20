/**
 * 总结上文：
- 将 ESM 模块转为类 CJS 的模块（但是不太相同）通过 __webpack_require__.d 来模拟 CJS 的导出
- 提供一个 CJS 加载的环境以及模块缓存（ require 以及 module_cache)
- 提供一个 ESM 的运行时（ r/o/d）
  - r 标注 __webpack_exports__ 是 ESM 模块
  - o Object.prototype.hasOwnProperty 的别名
  - d 将 ESM 模块的导出挂载到 __webpack_exports__ 对应的 getter 中，好处就是可以在取得时候在做计算
- 加载入口模块
---
- __webpack_require__.d：definition，给定两个参数 exports 和 definition，遍历 definition 并通过 getters 的方式挂载到 exports 中
- __webpack_require__.r：设定属性 __esModule 是 true 以及 Symbol.toStringTag 是 Module
- __webpack_require__.o：Object.prototype.hasOwnProperty 的别名
 */
(() => { // webpackBootstrap
  "use strict";
  // __webpack_modules__ 罗列所有的模块
  // 可以看到一个 ESM 模块会被编译为：通过 __webpack_require__.d 来包装 exports
  var __webpack_modules__ = ([
    /* 0 */
    ,
    /* 1 */
    /***/
    ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */
        "test": () => ( /* binding */ test)
        /* harmony export */
      });
      const sum = (a, b) => {
        return a + b;
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = (sum);
      const test = 'test';


      /***/
    })
  ]);
  /************************************************************************/
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  // 和 CJS 运行时生成的 __webpack_require__ 一致
  // - 检查缓存，有缓存直接返回缓存
  // - 没有缓存计算模块的 exports，并挂载到缓存中，并返回改 exports
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    };

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /************************************************************************/
  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    // - 遍历给定的对象definition
    // - 如果 definition 有但是给定的 exports 没有
    // - 给 exports 挂载定义这个没有 key 的 getter 方法，值就是 definition 对应的函数
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  // Object.prototype.hasOwnProperty 的别名
  (() => {
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      // 注入 Symbol.toStringTag
      // 根据 MDN 所言，当我们使用 Object.prototype.toString.call(obj) 时，内部就调用了 Symbol.toStringTag 属性：
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      // 注入 __esModule 属性为 true
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    };
  })();

  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  // 通过 __webapck_require__.r 将 __webpack_exports__ 注入 ESM 标注属性
  // 通过 __webpack_require__ 加载第 1 个模块
  // 剩余部分执行入口模块的代码
  (() => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
    // const sum = require('./sum')



    console.log((0, _sum__WEBPACK_IMPORTED_MODULE_0__["default"])(6, 9));
    console.log("test", _sum__WEBPACK_IMPORTED_MODULE_0__.test);
    console.log("s", _sum__WEBPACK_IMPORTED_MODULE_0__)
  })();

})();