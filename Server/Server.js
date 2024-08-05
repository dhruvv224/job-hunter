const express=require('express');
const app=express();
const ConnectDb=require('./Config/Database.js')
const cors=require('cors')
ConnectDb()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT=8000;
app.listen(PORT,()=>{
    try {
        console.log(`Server is running ${PORT}`)
        
    } catch (error) {
        console.log(`there is an error in server ${error}`)
        
    }
})
