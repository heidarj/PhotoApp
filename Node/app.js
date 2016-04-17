var funcs = require('./funcs')
var http = require('http')

http.createServer(function(req, res) {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello world!');

}).listen(80, "127.0.0.1");

console.log("HTTP server started")