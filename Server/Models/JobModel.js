const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const JobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String,
        required:true
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    applications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true
        }
    ]

},{timestamps:true})
const JobModel=new mongoose.model('jobs',JobSchema)
module.exports=JobModel