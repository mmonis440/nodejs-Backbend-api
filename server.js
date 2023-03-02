var http = require('http');
var  fs = require('fs');
const express = require('express');
const app = express();
const port = 5000;
app.get('/monis',function (req,res) { 
    res.send('the mecnaiicla keyboard is awsome')});
app.get('/api',(req,res)=>{
    fs.readFile('register.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        return res.end();})});
app.get('/aiman.js',(req,res)=>{
    res.send(`<p>welcomde to the worldx java low latecny in high scvalable system</p>slowly grabbing the knowlwdge of nodejs http server 
    ${Date()} 
    what to start an tech company in upcoming years`)
    console.log("you are on http server of nginx reverse proxy")});
    app.get('/api/vi',(req,res)=>{
        fs.readFile('anas.html',function(err,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            return res.end();});});
app.listen(port ,()=> console.log(`the server is listen on port ${port}`))