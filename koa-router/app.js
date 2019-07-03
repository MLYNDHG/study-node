let Koa = require("koa");

//引入路由中间件
let router = require("koa-router")();
//引入解析post请求中间件
let bodyparser=require('koa-bodyparser');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process${ctx.request.method}${ctx.request.url}`);
  await next();
});

//注册解析post中间件
app.use(bodyparser());

//注册路由中间件
app.use(router.routes());

//响应一个登录表单
router.get('/login',async (ctx,next)=>{
  ctx.response.type='text/html';
  ctx.response.body=`<h1>login</h1>
  <form action='/passLogin' method='post'>
  <p>Username:<input type='text'  name='username'></p>
  <p>Password:<input type='password' name='password'></p>
  <p><input type='submit' value='Login'></p>
  </form>
  `;
});

//接收post表单  并解析

router.post('/passLogin',async (ctx,next)=>{
  const name=ctx.request.body.username||'',password=ctx.request.body.password||'';
  console.log(`name:${name},password:${password}`);
  ctx.response.type='text/html';
  if(name==='luxifel'&&password==='123456'){
    ctx.response.body=`<h1>Welcome ${name}</h1>`;
  }else{
    ctx.response.body=`<h1>Login Failed</h1>
    <p><a href='/login'>Try Again</a></p>
    `;
  }
});

//处理参数的例子
router.get('/hello/:name',async (ctx,next)=>{
  const parms=ctx.params.name;
  ctx.response.type='text/html';
  ctx.response.body=`<h1>Hello ${parms}</h1>`;
});

//各种路由的例子
router.get('/',async (ctx,next)=>{
  ctx.response.typr='text/html';
  ctx.response.body='<h1>index.html</h1>';
});



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