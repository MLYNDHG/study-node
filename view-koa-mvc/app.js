let Koa = require("koa");
//引入解析post请求中间件
let bodyparser = require('koa-bodyparser');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process${ctx.request.method}${ctx.request.url}`);
  let start = new Date().getTime(),
    execTime;
  await next();
  execTime = new Date().getTime() - start;
  ctx.response.set("X-Response", `${execTime}ms`);
});

//给app设置模板引擎中间件  给app增加nunjucks的render方法 
const temp = require('./temp');
const isProduction = process.env.NODE_ENV === 'production';
app.use(temp('views', {
  noCache: !isProduction,
  watch: !isProduction //true 修改HTML时不需要重新启动服务
}));

//注册解析post中间件
app.use(bodyparser());
const controller = require('./controller');

//注册读取静态资源中间件
const readStatics = require('./static-files');
app.use(readStatics('/static/', __dirname + '/static'));

//注册路由中间件
app.use(controller());

app.listen(3000);
console.log("app started at port 3000...");