import TeacherModel from "../models/teacherModel.js"

export const signInController = async(req,res,next)=>{
    const exits = await TeacherModel.findOne({username:req.body.username});
    if(exits){
        return res.json({
            message:"User already Exists"
        })
    }
    try{
        const newTeacher=await TeacherModel.create(req.body);
        return res.json({message:"User Created",newTeacher})
    }catch(e){
        res.json({message:e.message})
    }
}
