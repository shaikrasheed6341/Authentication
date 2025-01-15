import bcrypt,{hash}from "bcrypt";
import crypto from "crypto";
import { User } from "./src/model/user.model.js";


const registration = async (req, res) => {
    let {  username, password } = req.body;
    try {
        let existuser = await User.findOne({ username })
        if (existuser) {
            return(
            res.status(401).json({
                message: "user already exist"
            })
        )
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const newuser = new User({
            username: username,
            password: hashpassword
        })
        await newuser.save()
        res.status(200).json({
            message: "you sucefully registerd"
        })


    }
    catch (e) {
        res.status(500).json({
            message: `something went erong in regestration from ${e.message}`
        })
    }
}

//login username match  honna hai uskey bad hei passwoed check karna hai
const login = async(req,res)=>{
    let {username,password} =req.body;
    try{
        if(!username && !password){
            res.status(201).json({message : "plz provide user name and password"})
        }
        let finduser = await User.findOne({username})
        if(!finduser){
            res.status(401).json({message:"user is not found"})
        }
        if(finduser){
            await bcrypt.compare(password,finduser.password)
            let token = crypto.randomBytes(20).toString('hex')
            finduser.token = token
            await finduser.save() 
            res.status(200).json({message:"you sucess fully login "})
        }
    }
    catch(e){
        res.status(404).json({message :`something weint wrong in login form ${e.message}`})
    }
}



export { registration,login }