import TeacherModel from "../models/teacherModel.js"

export const signInController = async(req,res,next)=>{
    const exits = await TeacherModel.findOne({username:req.body.username});
    if(exits){
        return res.json({
            message:"User already Exists",
            val:false
        })
    }
    try{
        const newTeacher=await TeacherModel.create(req.body);
        return res.json({message:"User Created",newTeacher,val:true})
    }catch(e){
        res.json({message:e.message})
    }
}
