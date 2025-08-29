import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./Routes.js"
import cookieParser from "cookie-parser"
let app = express()
dotenv.config()
app.use(cors({
    origin:[
    "http://localhost:5173"
    ] ,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.all("/" , router)



app.listen(3000 , console.log("server work"))