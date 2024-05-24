import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

const app=express()
const port=4000

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("APT working")
})


app.listen(port,()=>{
    console.log(`server started at port:${port}`);
})
// mongodb+srv://samj10022004:DSOw5CquwNCs6d5m@cluster0.9m37edm.mongodb.net/?