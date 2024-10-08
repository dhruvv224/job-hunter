const mongoose=require('mongoose');
const express=require('express');
const CompanySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    website:{
        type:String,
    },
    logo:{
        type:String,
        
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:false
    }

},{timestamps:true})
const CompanyModel=mongoose.model('Company',CompanySchema)
module.exports =CompanyModel;