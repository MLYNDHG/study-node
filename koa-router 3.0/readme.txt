为了避免所有的请求函数都写在app.js中   将每一个处理请求封装到单独的js文件中   逻辑清晰
1.暴露的结构mudule.exports={'method /path':request_fn};
  method: GET  or  POST  ...   即请求的类型
  /path：请求的url
  request_fn：接收到请求后的所做的事情函数

2.app.js中
  1)首先获取封装的js文件   fs.readdirSync(__dirname+'controllers');--->  endwWith('.js');
  2)require 引入封装的文件中暴露的对象
  3)判断是什么类型（method）的请求   在使用router  做相应的判断




  再将app.js进行封装