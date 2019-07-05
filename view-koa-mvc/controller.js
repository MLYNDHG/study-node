module.exports = function () {
    //引入路由中间件
    let router = require("koa-router")();
    //获取封装到controllers中的js
    let fs = require('fs');
    let files = fs.readdirSync(__dirname + '/controllers');
    let js_files = files.filter(function (item) {
        return item.endsWith('.js');
    });
    //统一处理每个封装的js文件
    for (const item of js_files) {
        console.log(`Process controller:${item}`);
        let everObj = require(__dirname + '/controllers/' + item);
        for (const url in everObj) {
            if (url.startsWith('GET')) {
                const path = url.substring(4);
                router.get(path, everObj[url]);
                console.log(`register URL mapping :GET ${path}`);
            } else if (url.startsWith('POST')) {
                const path = url.substring(5);
                router.post(path, everObj[url]);
                console.log(`register URL mapping :POST ${path}`);
            } else {
                console.log(`invalid URL:${url}`);
            }
        }
    }
    return router.routes();
}