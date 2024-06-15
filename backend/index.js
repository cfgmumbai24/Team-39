import express from "express";
import mongoose from "mongoose";
const app=express();
const mongo_url=process.env.MONGO||"mongodb+srv://raj2104:raj2104@cluster0.7v7kseg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const PORT=5000

mongoose
  .connect(mongo_url)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });