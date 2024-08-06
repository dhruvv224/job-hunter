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
router.post('/PostCompany',async(req,res)=>{
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
        
    } catch (error) {
        
    }
})
module.exports=router
