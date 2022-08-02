const http = require('http')

http.createServer((request,response)=>{
    response.statusCode = 200;
    response.setHeader('content-Type','text/plain');
    response.end('Hello world');

}).listen(3000);
console.log('Servier running at http://127.0.0.1:3000/');