const http = require('http');
const fs = require('fs');
const port = 9000;

http.createServer(function (req,res) { 
    res.setHeader("content-type","text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`)
 }).listen(9000);

