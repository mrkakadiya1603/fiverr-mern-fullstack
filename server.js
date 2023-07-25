import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);


const connect = async () => {
try {
  mongoose.connect(process.env.MONGO);
  console.log("connected to MongoDb");
} catch (e) {
  console.log(e);
}}


app.listen(8800, () => {
    connect()
  console.log("listening");
});
