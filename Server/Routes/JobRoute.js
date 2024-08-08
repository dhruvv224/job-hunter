const express=require('express');
const router=express.Router()
const app=express();
const Jobs=require('../Models/JobModel.js')
// get company
app.use(express.json())


router.get('/getCompany',async(req,res)=>{
    try {
        const jobs=await Jobs.find()
        res.status(200).json({
            message:"jobs founded",jobs
        })

        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"not found thre is somethin wrong",error})
        
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
router.get('/getByadminId',async(req,res)=>{
    try {
        const adminId=req.params.id;
        const Jobsbyid=await Jobs.findById(adminId)
        if(!Jobsbyid)
        {
            res.status(400).json({message:"cant find jobs"})
        }
        res.status(200).json({message:"company founded",Jobsbyid})
        
    } catch (error) {
        
    }
})
module.exports=router
