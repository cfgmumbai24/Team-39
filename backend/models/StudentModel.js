import mongoose from "mongoose"
const StudentModel = new mongoose.Schema({
    name:{type:string,required:true},
    rollNumber:{type:Number,required:true},
})

module.exports = mongoose.model('Student', StudentModel)
