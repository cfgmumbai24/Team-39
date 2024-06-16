import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true,minLen:6}
})

const TeacherModel=mongoose.model('Teacher',TeacherSchema);
export default TeacherModel;