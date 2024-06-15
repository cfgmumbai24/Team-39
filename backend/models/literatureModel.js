import mongoose from 'mongoose';

const LiteratureSchema =new  mongoose.Schema({
    english:{type:Number ,required:true,min:0,max:100},
    hindi:{type:Number ,required:true,min:0,max:100},
    marathi:{type:Number ,required:true,min:0,max:100},
    avg:{type:Number,required:true,min:0,max:100},
    sid:{type:Number,required:true},
    createdAt:{type:Date,required:true,default:Date.now}

})
const LiteratureModel=mongoose.model("literature",LiteratureSchema)
export default LiteratureModel