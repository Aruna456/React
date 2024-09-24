const mongoose=require('mongoose')

const userschema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    message :{
        type:String,
        required:true
    
    }
})

module.exports=userschema