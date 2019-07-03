let Koa = require("koa");

const app = new Koa();

//use 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  if (ctx.request.path === "/") {
    ctx.response.type = 'text/html';
    ctx.response.body = "<h1>index.page</h1>";
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
  if (ctx.request.path === "/test") { //注意加上   /   
    ctx.response.type = 'text/html'; //  浏览器通过此类型判断   获取的文件类型
    ctx.response.body = "<h1>test.page</h1>";
  } else {
    await next();
  }
});

app.listen(3000);
console.log("app started at port 3000...");