let Koa = require("koa");

//引入路由中间件
let router = require("koa-router")();

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process${ctx.request.method}${ctx.request.url}`);
  await next();
});

router.get('/hello/:name');

app.use(router.routes());

//use 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//   if (ctx.request.path === "/") {
//     ctx.response.type = 'text/html';
//     ctx.response.body = "<h1>index.page</h1>";
//   } else {
//     await next();
//   }
// });

// app.use(async (ctx, next) => {
//   if (ctx.request.path === "/test") {
//     ctx.response.type = 'text/html';
//     ctx.response.body = "<h1>test.page</h1>";
//   } else {
//     await next();
//   }
// });

app.listen(3000);
console.log("app started at port 3000...");