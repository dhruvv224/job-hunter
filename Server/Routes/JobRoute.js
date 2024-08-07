const express=require('express');
const router=express.Router()
const app=express();
const Jobs=require('../Models/JobModel.js')
// get company

router.get('/getCompany',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

})
router.post('/postJob',async(req,res)=>{
    try 
    {
        const{title,description,requirements,salary,location,jobType,position,company}=req.body
        const id=req.params.id
        if(!title||!description  || !requirements || !salary || !location ||!jobType ||!position ||!company)
        {
            res.status(400).json({message:"enter all fields"})
        }
        const newJob=new Jobs({
            title,description,requirements,salary,location,jobType,position,company
        })
        
        await newJob.save()
        res.status(200).json({message:"job posted succcessfully",newJob})
    } catch (error) {
        
        console.log("error",error)
        res.status(400).json({message:"error occurs"})
    }
})