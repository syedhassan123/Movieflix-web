import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
    username:String,
    email:String,
    phone:String,
    message:String
})

export const Contact= mongoose.models.contacts || mongoose.model("contacts",contactSchema) 