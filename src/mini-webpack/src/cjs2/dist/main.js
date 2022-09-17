
(() => {
  // 1. 构建 modules
  const __webpack_modules__ = [
    
  ((module, exports, require) => {
    const sum = require(1);

console.log(sum(6, 9));
  }),
  ((module, exports, require) => {
    module.exports = (a, b) => {
  return a + b;
};
  })
  ];

  // 模块缓存，所有模块都仅仅会加载并执行一次
  const __webpack_module_cache__ = {};

  // 2. 加载模块，模拟代码中的 require 函数
  // 打包后，实际上根据模块的 ID 加载，并对 module.exports 进行缓存
  function __webpack_require__ (moduleId) {
    const cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    const module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  // 3. 运行入口函数
  __webpack_require__(0)
})()
