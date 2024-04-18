// 第一步：当点击按钮时，先通过 jsonp 的方式去加载 test.js 模块所对应的文件

require.e = function (chunkId) {
    let promises = [];
    require.j(chunkId, promises);
    return Promise.all(promises);
}

var installedChunks = {
    main: 0
}
require.j = function (chunkId, promises) {
    let promise = new Promise((resolve, reject) => {
        installedChunks[chunkId] = [resolve, reject];
    })
    promises.push(promise);

    const url = require.publicPath + chunkId + '.main.js';
    let script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}

