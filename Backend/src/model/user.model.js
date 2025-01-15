import mongoose from "mongoose";

const userschema =  mongoose.Schema({
    firstname  :{
        type : String,
       
    },
    lastname:{
        type : String
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
export  {User};