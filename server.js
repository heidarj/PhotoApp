var funcs = require('./funcs')
var http = require('http')
fs = require('fs')

http.createServer(function(req, res) {
    res.writeHeader(200, {"Content-Type": "text/html"}); 
    html = fs.createReadStream('Pages/index.html').pipe(res)
    //res.write();  
    //res.end(html);  
}).listen(80, "10.42.103.25");

console.log("HTTP server started at ip 10.42.103.25")