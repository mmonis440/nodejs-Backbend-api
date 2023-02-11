/*function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sliceIntoChunks(arr, 3));

const array = [455,776,221,677,111,4,78,8,7666];
console.log((`THE BIGG NO IN THIS ARRAY IS`),Math.random(...array))*/

var http = require('http');
var fs = require ('fs');

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

/*app.get('/' , (req , res)=>{

   //res.send('hello from simple server :)')
  // res.json({title:"geek of gods "})
   
   res.write("hello from same page")
   next();

})*/

http.createServer(function (req,res) {
    fs.readFile('/anas.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end()
    });

}).listen(9000) 

var server = http.createServer(function (req,res) {
    var url=req.url;
    if (url === '/index.html'){
        res.write("hello monis")
        res.end();
    }
  })


//app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))