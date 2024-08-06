const UserModel=require('../Models/Usermodel.js')
const multer=require('multer')
const express =require('express');
const app=express()
app.use(express.json())
const router=express.Router();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// display data
router.get('/',async(req,res)=>{
    try {
        const user= await UserModel.find()
        res.status(200).json({user:user})

        
    } catch (error) {
        console.log("there is somthing wrong",error)
        res.status(400).json({message:'somthing is wrong'})
    }
})
// saving images
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/Uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
// register user
router.post('/register',async(req,res)=>{
    try {
        const{Fullname,Email,Phonenumber,Password,Role}=req.body;
        if(!Fullname || !Email || !Phonenumber || !Role )
        {
            res.status(400).json({message:"something went wrong"})
        }
        const UserEmail=await UserModel.findOne({Email})
        if(UserEmail)
        {
            res.status(400).json({message:'user already exists'})
        }
const hashedPass=await bcrypt.hash(Password,10)
 const newUser=new UserModel({
    Fullname,
    Email,
    Phonenumber,
    password:hashedPass,
    Role
 })
        
    } catch (error) {
        console.log(`error ${error}`)
        res.status(400).json({message:'error server error'})
    }


})
// login api


router.post('/login', async (req, res) => {
  try {
    const { Password, Email, Role } = req.body;
    
    // Find the user by email
    const User = await UserModel.findOne({ Email });
    
    if (!User) {
      return res.status(400).json({ message: 'User does not exist' });
    }
    
    // Compare the password
    const isMatch = await bcrypt.compare(Password, User.Password);
    
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials!' });
    }
    
    // Generate JWT token
    const token = jwt.sign({ id: User._id, role: User.Role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Set the cookie
    res.cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });
    
    // Respond with the token and user information
    res.status(200).json({ token, User });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Login failed!', error: error.message });
  }
});


module.exports=router