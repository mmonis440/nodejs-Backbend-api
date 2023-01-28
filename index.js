 const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.get('/anas.js',(req,res)=>{
    res.send(`<p>you are on the first page of website and this is under maintaince for 30 minutes</p>
     ${Date()}
    <p>also confuse little bit on devops to choose or go for the development side of the software</p> `)
    console.log("you are viewing shahnaz page")
})
app.get('/aiman.js',(req,res)=>{
    res.send(`<p>welcomde to the worldx java low latecny in high scvalable system</p>slowly grabbing the knowlwdge of nodejs http server 
    ${Date()} 
    what to start an tech company in upcoming years`)
    console.log("you are on http server of nginx reverse proxy")
    

})



app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))