const UserModel=require('../Models/Usermodel.js')
const bycrpt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const multer=require('multer')
const express =require('express');
const app=express()
app.use(express.json())
const router=express.Router();
router.get('/',async(req,res)=>{
    try {
        const user= await UserModel.find()
        res.status(200).json({user:user})

        
    } catch (error) {
        console.log("there is somthing wrong",error)
        res.status(400).json({message:'somthing is wrong'})
    }
})
module.exports=router