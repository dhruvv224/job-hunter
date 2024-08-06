const Company=require('../Models/CompanyModel.js');
const express=require('express');
const router=express.Router();
const app=express()
// get Company details
router.get('/CompanyDetails',async(req,res)=>{
    try {
        const Company=await Company.find()
        res.status(200).json({message:'Company founded'})
        
    } catch (error) {
        console.log("error",error)
        res.status(401).json({message:'error cant fetch details'})
        
    }
})
