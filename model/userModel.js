import mongoose from "mongoose";
 
const userSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    task:{
        type:String,
        required:true,
    },
    StartingDate:{
        type:String,
        required:true,
    },
    ExpeEndDate:{
        type:String,
        required:true,
    },
    currentStatus:{
        type:String,
        required:true,
    }

})

export default mongoose.model("user",userSchema); 