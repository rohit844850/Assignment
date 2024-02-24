const mongoose= require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        
        required:true
    },
    lastname:{
        type:String,
       
        required:true,

    },
    email:{
        type:String

    },
    phone:{
        type:String 
    },
    project:{
        type:String 
    }
})


const userModel = mongoose.model('user', userSchema);
module.exports = userModel;