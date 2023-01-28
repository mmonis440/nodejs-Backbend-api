var http = require('http');
var url = require('url');
var port = 9000;

http.createServer(function (req,res) { 
    res.writeHead(200,{'content-type':'plain/html'});
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month  + " " + q.date ;
    res.end(txt);
    console.log(`connect to the port ${port} `)
 }).listen(9000);