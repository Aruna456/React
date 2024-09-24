const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGOURL|| "mongodb+srv://Aruna:12345@portfolio.vho9z.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio")

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log("MongoDB Connected");
    
})

connection.on('error',()=>{
    console.log("DB Error");
})

module.exports=mongoose