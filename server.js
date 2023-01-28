var http = require('http');
var  fs = require('fs');
const express = require('express');
const app = express();

const port = 5000;

app.get('/monis.js',function (req,res) { 
    res.send('the mecnaiicla keyboard is awsome')
 });




/*http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.write(`hello the date is ${Date()} and 2023`)
    res.end("port 8080");
    res.write(req.url);
    
}).listen(8080);  

http.createServer(function (req,res) {
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end()
    });

}).listen(9000) */



app.get('/aiman.js',(req,res)=>{
    res.send(`<p>welcomde to the worldx java low latecny in high scvalable system</p>slowly grabbing the knowlwdge of nodejs http server 
    ${Date()} 
    what to start an tech company in upcoming years`)
    console.log("you are on http server of nginx reverse proxy")
    

});


app.listen(port ,()=> `the server is listen on port ${port}`)