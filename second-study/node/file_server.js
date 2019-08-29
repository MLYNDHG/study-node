'use strict';
//文件服务器
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
//1.获取当前目录
var workDir = path.resolve(process.argv[2] || '.');
console.log("Static workDir:" + workDir);
//2.打开一服务
var server = http.createServer((request, response) => {
  //获取请求的path
  var pathname = url.parse(request.url).pathname;
  //获取对应的文件路径
  var filepath = path.join(workDir, pathname);
  //读取文件状态  有文件则发送  无则报错
  fs.stat(filepath, (err, stats) => {
    if (!err && stats.isFile()) {
      console.log('200' + request.url);
      response.writeHead(200);
      fs.createReadStream(filepath).pipe(response);
    } else {
      console.log('404' + request.url);
      response.writeHead(404);
      response.end('404 Not Found');
    }
  });
});

server.listen(1234);
console.log('Server is running at http://127.0.0.1:1234/');