import USER from "../model/userModel.js";

export const fetch = async (req, res) => {
    try {
        const users = await USER.find();
        if (users.length === 0) {
            return res.status(400).json({ message: "Task not found" });
        }
        // Send a 200 OK response with the users
        res.status(200).json(users);
    } catch (error) {
        // Handle the error and send a 500 Internal Server Error response
        res.status(500).json({ error: "Internal server error" });
    }
}


export const create =async(req ,res)=>{
    try{
          
       const userData = new USER(req.body);
       const{task} =userData;
       const userExist=await USER.findOne({task});
       if(userExist){
        return res.status(400).json({message:"TASK ALREDY EXITS"});
       }
       const savedUser=await userData.save();
       res.status(200).json(savedUser);
    } catch(error){
          res.status(500).json({error :"Internal server error"});
    }
}

export const update=async(req ,res)=>{
    try{
        const id=req.params.id;
        const userExist=await USER.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message:"Task not found"});
        }
        const updatedUser=await USER.findByIdAndUpdate(id, req.body,{new:true});
         res.status(201).json(updatedUser);
    }catch(error){
        res.status(500).json({error :"Internal server error"});
    }
}
export const deleteUser=async(req,res)=>{
    try{
        const id =req.params.id;
        const userExist=await USER.findOne({_id:id});
        if(!userExist){
            return req.status(400).json({message:"Task not found"});
        }
        await USER.findByIdAndDelete(id);
        res.status(201).json({message:"task delete is successful"});

    }catch(error){
        res.status(500).json({error :"Task not found"});
    }


}