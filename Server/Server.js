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
// api end points
app.use('/api/auth/user',require('./Routes/UserRoute.js'))
app.use('/api/company',require('./Routes/CompanyRoute.js'));
app.use('/api/jobs/',require('./Routes/JobRoute.js'))