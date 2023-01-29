const http = require('http');
const fs = require('fs');

const port = 5000;


/*function reqListener(req, res) {
    console.log(`the server is conncetd on port 3000`,req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Demo Page</title></head>')
    res.write('<body><h1>Hello from NodeJS Demo App</h1></body>')
    res.write('</html');
    res.end();
} */


   
http.createServer(function (req,res) { 
    console.log(req.url,req.headers);
    fs.readFile('index.html',function (err,data) { 
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
     });
     console.log('nodejs backned postgresql is running' ,`${port}`)
 }).listen(5000);




