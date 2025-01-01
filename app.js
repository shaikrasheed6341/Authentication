import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import  crypto from "crypto"
import router from "./src/routes/user.route.js"
import cors from "cors"

const  app = express();
const port = 8000;

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended :true}))
app.use("/api/v1/user",router)




const start = async()=>{
    const url = "entre your data base link"
     await mongoose.connect(url)
    .then(console.log(`data base is sucessfully connected `))

    app.listen(port,()=>{
        console.log("your in port 8000")
    })

}
start()

