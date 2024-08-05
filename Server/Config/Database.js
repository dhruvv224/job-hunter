const mongoose=require('mongoose');
const ConnectDb=async()=>{
    try {
        const connection=await mongoose.connect('mongodb://localhost:27017/Job-hunter')
        console.log(`connection successful ${connection.connection.host}`)
    } catch (error) {
        console.log(`there is something went wrong ${error}`)
        
    }
}
module.exports=ConnectDb