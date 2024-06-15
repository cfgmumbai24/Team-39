import mongoose from "mongoose"
const FoundationSchema = new mongoose.Schema({
  sid: {
    type: Number,
    required:true,
  },
  speaking:{type:Number, required:true},
  learning:{type:Number, required:true},
  writing:{type:Number, required:true},
  physicalInvolvement:{type:Number, required:true},
  craft:{type:Number, required:true},
  avg:{type:Number,default:0},
  createdAt:{type:Date,default:Date.now},
})
const FoundationModel=mongoose.model("Foundation",FoundationSchema)
export default FoundationModel