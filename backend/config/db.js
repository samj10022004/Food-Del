import mongoose from "mongoose";



export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://samj10022004:DSOw5CquwNCs6d5m@cluster0.9m37edm.mongodb.net/food-delivery').then(()=>console.log("DB connected"))
}