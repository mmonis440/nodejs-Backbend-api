const express = require('express')
const app = express()


app.get('/NODEAPI/' , (req , res)=>{

    res.send('hello from simple server  and easily garbbing the routing knowledge:)')
    res.statusMessage('hello monis good night')
 
 })
 