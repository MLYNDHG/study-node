'use strict';
//引入模块
let sayGreet = require('./hello');
// let fs = require('fs');




// fs.readFile('sample.png', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     console.log(data.length + 'bytes');
//   }
// })

// fs.readFile('sample.txt', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data)
//   }
// })

//开启一个http服务器
// let http = require('http');
// let server = http.createServer(function (request, response) {
//   console.log(request.method + ':' + request.url);
//   response.writeHead(200, {
//     'Content-Type': "text/html"
//   });

//   response.end('<h1>Hello World</h1>');
// });
// server.listen(8080);

//开启一个文件服务器
let fs = require('fs');
let path = require('path');
let url = require('url');
let http = require('http');
//1.获取当前目录
const workdir = path.resolve(process.argv[2] || '.');
console.log(workdir);

const server = http.createServer(function (request, response) {
  //2.获得url请求文件名  组合成为绝对文件路径
  const pathname = url.parse(request.url).pathname;
  //console.log(pathname);
  const adPath = path.join(workdir, pathname);
  //console.log(adPath);
  fs.stat(adPath, function (err, stats) {
    if (!err && stats.isFile()) {
      console.log(request.method + ":" + request.url);

      response.writeHead(200);

      fs.createReadStream(adPath).pipe(response);
    } else {
      console.log('404' + request.url);
      response.writeHead(404);
      response.end("<h1>404 NOT FOUND</h1>");
    }
  });
});
server.listen(8080);

sayGreet();