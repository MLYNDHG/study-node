var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');
//获取当前运行目录
var workDir = path.resolve('.');
console.log(workDir);
var filePath = path.join(workDir, '1.jpg');
console.log(filePath);