const express = require ('express')
const app=express()
const dbconnection = require("./config/db")
 require('dotenv').config()

 

app.get('/',(req,res)=>
{
    res.json({message:"Welcome"})
})

port = process.env.PORT||7000
//Middleware
app.use(express.json())
app.listen(port,()=>
{
    console.log(`Sever listening to Port: http://localhost:${port}`);
    
})