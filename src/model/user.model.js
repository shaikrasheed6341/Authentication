import mongoose from "mongoose";

const userschema =  mongoose.Schema({
    name  :{
        type : String,
       
    },
    username:{
        type : String,
        required:true
    },
    password:{
        type : String,
        required : true
    },
    token :{
        type :String,
       
    }


})

const User = mongoose.model('User',userschema)
export  {User}