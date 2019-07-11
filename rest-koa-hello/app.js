const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest').restify;
const app = new Koa();

//每次请求都会执行该中间件打印请求方法类型  与  url
app.use(async (ctx, next) => {
  console.log(`process${ctx.request.method}${ctx.request.url}`);
  await next();
});
//给app设置模板引擎中间件  给app增加nunjucks的render方法 
//前期学的时候以为必须通过此处输出html文件
//现在发现可以使用像读取静态资源一样将html读取出来输出到页面
//使用nunjucks当然也可以  既然前后端分离开发了 那么单独的页面来结合api是更舒服的

const temp = require('./temp');
const isProduction = process.env.NODE_ENV === 'production';
app.use(temp('views', {
  noCache: !isProduction,
  watch: !isProduction //true 修改HTML时不需要重新启动服务
}));

//给app的ctx设置rest方法用来直接响应json数据
//本质即为ctx.rest=(data)=>{
//ctx.response.type='application/json'
//ctx.response.body='data';
//}
//此中间件只是封装了两行代码而已
app.use(rest());

//解析POST请求
app.use(bodyparser());

//注册读取静态资源中间件
const readStatics = require('./static-files');
app.use(readStatics('/static/', __dirname + '/static'));

//为项目中存在的请求配置注册路由router.get/...(path,async中间件)
//然后当浏览器(客户端)发来请求后 会去router中寻找是否注册已存在
//存在即响应  该中间件启动时执行一次
app.use(controller());


app.listen(3000);
console.log('app started at port 3000...');