const mongoose=require("mongoose")


const projectschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    }                    
})


const Projects = mongoose.model("Projects",projectschema)
module.exports = Projects;