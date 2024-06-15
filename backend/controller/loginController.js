import TeacherModel from "../models/teacherModel.js";
export const logInController = async(req,res,next)=>{
    const user = await TeacherModel.findOne({username:req.body.username})
    if(!user){
        return res.json({message:"User does not exists / Incorrect username"})
    }
    if(!(user.password===req.body.password)){
        return res.json({
            message:"Incorrect password ! ",
            access:false
        })
    }
    res.json({
        message:"Correct creds",
        access:true
    })
}