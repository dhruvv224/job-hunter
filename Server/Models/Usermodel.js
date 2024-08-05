const express=require('express');
const mongoose=require('mongoose');
const app=express();
const UserSchema= new mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,

    },
    Phonenumber:{
        type:Number,
        required:true,

    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true,
        enum:['Aplicant','Recruiter']
    },
    Profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        ProfilePhoto:{
            type:String
        }
    }

},{timestamps:true})
const UserModel=mongoose.model("User",UserSchema);
module.exports=UserModel