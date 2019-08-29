const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Peocess${ctx.request.method}${ctx.request.url}`);
  await next();
});
//router
router.get('/hello/:name', async (ctx, next) => {
  ctx.response.body = `<h1>hello,${ctx.params.name}</h1>`;
});
router.get('/', async (ctx, next) => {
  ctx.response.body = "<h1>Index</h1>";
});
//返回一个表单  用来模拟下方的post请求
// router.get('/login', async (ctx, next) => {
//   ctx.response.body = `<h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// });

// router.post('/signin', async (ctx, next) => {
//   var name = ctx.request.body.name || '',
//     password = ctx.request.body.password || '';
//   console.log(`sign in with name:${name},password:${password}`);
//   if (name === 'yt' && password === '520') {
//     ctx.response.body = '<h1>登陆成功</h1>';
//   } else {
//     ctx.response.body = `<h1>登录失败</h1>
//     <p><a href="/login">重试</p>
//     `;
//   }
// });


//通过扫描controller中的服务注册中间件

app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
console.log("server is running at http://127.0.0.1:3000");