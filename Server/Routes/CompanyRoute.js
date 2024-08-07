const Company=require('../Models/CompanyModel.js');
const express=require('express');
const router=express.Router();
const app=express()
// get Company details
router.get('/DisplayCompany',async(req,res)=>{
    try {
        const company=await Company.find()
        res.status(200).json({message:'Company founded',company})
        
    } catch (error) {
        console.log("error",error)
        res.status(401).json({message:'error cant fetch details'})
        
    }
})
router.post('/CreateCompany',async(req,res)=>{
    try {
        const{name,location,website,logo}=req.body;
        const CompanyName=await Company.findOne({name})
        if(CompanyName)
        {
            res.status(400).json({message:'Company already registered try something diffrent name'})
        }
        const NewCompany=new Company({
            name,
            location,
            website,
            logo
        })
        await NewCompany.save()
        res.status(200).json({message:"Company Posted successfully",NewCompany})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"error cant post Create company"})
        
    }
})
router.post('/updateCompany/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const company=await Company.findById(id)
        if(!company)
        {
            req.status(400).json({message:"Company not found"})
        }
        res.status(200).json({message:"Company found",company})
        
    } catch (error) {
        console.log("error",error)
        res.status(400).json({message:"cant update company",error})
        
    }
})
module.exports=router
