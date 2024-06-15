import express from "express";
import mongoose from "mongoose";
const app=express();
try{
    mongoose.connect();
}catch(e){
    console.log(e);
}

app.listen(3000,()=>{
    console.log("http://localhost:3000/");
})