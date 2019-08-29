var http = require('http');


var server = http.createServer((request, response) => {
  console.log(request.method + ':' + request.url);
  response.writeHead(200, {
    'Content-type': 'text/html'
  });
  response.end('<h1>hello</h1>');
});

server.listen(1234);
console.log('Server is running at http://127.0.0.1:1234/');