const mongoose=require('mongoose')
const express=require('express');
const ApplicationSchema=new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:'true'
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Applicant',
        required:'true'
    },
    status:{
        type:String,
        enum:['accepted','rejected','pending'],
        default:'pending',
    }
},{timestamps:'true'})
const ApplicationModel=mongoose.model('Application',ApplicationSchema)
module.exports=ApplicationSchema;