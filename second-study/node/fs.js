//引入fs文件模块
var fs = require('fs');
//读取文本文件
// fs.readFile('example.txt', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//读取图片
// fs.readFile('1.jpg', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     console.log(data.length + 'bytes');
//   }
// });
//写文件
// fs.writeFile('example.txt', '珍惜', function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('ok');
//   }
// });

//流   先读   再写   再用pipe连接
// var rs = fs.createReadStream('example.txt', 'utf-8');
// rs.on('data', function (chunk) {
//   console.log('data');
//   console.log(chunk);
// });
// rs.on('end', function () {
//   console.log('end');
// });
// rs.on('error', function (err) {
//   console.log('error');
//   console.log(err);
// });

// var ws = fs.createWriteStream('example.txt', 'utf-8');
// ws.write("我");
// ws.write("爱");
// ws.write("你");
// ws.write('end');
// ws.end();


// var ws1 = fs.createWriteStream('example.txt', 'utf-8');
// ws1.write(new Buffer('使用Stream写入二进制数据...../n', 'utf-8'));
// ws1.write(new Buffer('end', 'utf-8'));
// ws1.end();

//使用管道连接输出文件流
var PipeRs = fs.createReadStream('example.txt', 'utf-8');
var PipeWs = fs.createWriteStream('copy.txt', 'utf-8');
PipeRs.pipe(PipeWs);