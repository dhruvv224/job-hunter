const express=require('express');
const router=express.Router()
const app=express()
const Application=require('../Models/Application.js')
router.get('/getApplication',async(req,res)=>{
    try {
        const response=await Application.find()
        res.status(400).json({
            message:'Application founded',response
        })
        
    } catch (error) {
        console.log("not found")
        res.status(400).json({
            message:"not found"
        })
        
    }
})
// posting application
router.post('/postApplication',async(req,res)=>{
    try {
        const {job,applicant,status}=req.body
        if(!job||!applicant)
        {
            res.status(400).json({
                message:"something is missing"
            })
        }
        const newApplication=new Application({
            jon,applicant,status
        })
        await newApplication.save()
        res.status(200).json({
            message:"application submited"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"cant submit your application",error
        })
        
    }
})
module.exports=router