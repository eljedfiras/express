const express = require('express')


const app = express()

const port = 5001

app.get('/home',(req,res)=>{
res.sendFile(__dirname+'/public/home.html')
})

app.get('/ourservice',(req,res)=>{
    res.sendFile(__dirname+'/public/ourservicdes.html')
})

app.get('/contactus',(req,res)=>{
    res.sendFile(__dirname+'/public/contactus.html')
})

app.use(express.static(__dirname+'/public/'))

app.listen(port,err=>err?console.log(err):console.log("your in the port 5001"))