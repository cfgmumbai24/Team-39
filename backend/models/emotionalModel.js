import mongoose from 'mongoose';

const emotionalSchema =new  mongoose.Schema({
    q1:{type:Number ,required:true},
    q2:{type:Number ,required:true},
    q3:{type:Number ,required:true},
    q4:{type:Number,required:true},
    q5:{type:Number,required:true},
    avg:{type:Number,required:true},
    sid:{type:Number,required:true},
    createdAt:{type:Date,required:true,default:Date.now}

})
const EmotionalModel=mongoose.model("Emotional",emotionalSchema)
export default EmotionalModel