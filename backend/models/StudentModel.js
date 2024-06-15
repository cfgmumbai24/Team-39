import mongoose from "mongoose"
const StudentSchema = new mongoose.Schema({
    name:{type:string,required:true},
    sid:{type:Number,required:true},
})

const NumericalModel = mongoose.model('Student', StudentSchema)
export default NumericalModel;
