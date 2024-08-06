const UserModel=require('../Models/Usermodel.js')
const multer=require('multer')
const express =require('express');
const app=express()
app.use(express.json())
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();  // Load environment variables

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
router.post('/register', async (req, res) => {
    try {
      const { Fullname, Email, Phonenumber, Password, Role } = req.body;
      
      // Check if all fields are provided
      if (!Fullname || !Email || !Phonenumber || !Password || !Role) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Check if the user already exists
      const UserEmail = await UserModel.findOne({ Email });
      if (UserEmail) {
        return res.status(400).json({ message: 'User already exists' });
      }
      
      // Hash the password
      const hashedPass = await bcrypt.hash(Password, 10);
      
      // Create a new user
      const newUser = new UserModel({
        Fullname,
        Email,
        Phonenumber,
        Password: hashedPass,
        Role
      });
      
      // Save the new user to the database
      await newUser.save();
      
      // Respond with success message
      res.status(200).json({ message: 'User created successfully', newUser });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ message: 'Server error' });
    }
  });
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
router.post('/logout',async(req,res)=>{
    try {
        res.status(200).cookie('token',"",{maxAge:0}).json({
            message:'login successfully done'
        })
        
    } catch (error) {
        
        console.log(`there is something wrong ${error}`)
    }
})
router.post('/updateProfile/:id', async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
  
      const { Fullname, Email, Phonenumber, bio, skills } = req.body;
      let SkillsArray
      if(skills)
      {
         skillsArray = skills.split(",");

      }
  
      // Find the user by ID
      const User = await UserModel.findById(id);
      
      if (!User) {
        return res.status(400).json({ message: 'User not found' });
      }
      
      console.log(User);
  
      // Update the user's information
      User.Fullname = Fullname;
      User.Email = Email;
      User.Phonenumber = Phonenumber;
      User.Profile.bio = bio;
      User.Profile.skills = skillsArray;
  
      // Save the updated user data
      await User.save();
  
      const updatedUser = {
        _id: User._id,
        Fullname: User.Fullname,
        Email: User.Email,
        Phonenumber: User.Phonenumber,
        Role: User.Role,
        Profile: User.Profile
      };
  
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  
    } catch (error) {
      console.log("Error", error);
      res.status(500).json({ message: 'Error while updating your profile', error: error.message });
    }
  });
module.exports=router