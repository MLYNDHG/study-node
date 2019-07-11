const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');
//这是一个读取静态资源的中间件  返回async.....
//url 静态资源文件夹   dir  入口文件的绝对路径
//url 用来判断请求的资源是否包含url
//dir 用来组合文件的绝对url
function readStatic(url, dir) {
  return async (ctx, next) => {
    const requestPath = ctx.request.path;
    if (requestPath.startsWith(url)) {
      let fullpath = path.join(dir, requestPath.substring(url.length));
      //上方引入的mz/fs   封装了fs  可以使用async  await  不用使用promise   与   回调
      if (await fs.exists(fullpath)) {
        //mime查看类型
        ctx.response.type = mime.lookup(requestPath);
        ctx.response.body = await fs.readFile(fullpath);
      } else {
        ctx.response.status = 404;
      }
      await next();
    } else {
      await next();
    }
  }
}

module.exports = readStatic;