import express from "express";
import dotenv from "dotenv"

import { connectDB } from "../lib/db.js";
import authRoutes from "../routes/auth.routes.js"

const app = express();

dotenv.config()

const PORT = process.env.PORT

app.use(express.json());


app.use("/api/auth", authRoutes)

app.listen(PORT, () =>{
    console.log(`Server Is Runing on ${PORT}`)
    connectDB();
});