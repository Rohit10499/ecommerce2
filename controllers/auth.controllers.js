import { User } from "../models/user.models.js";

const home=async(req,res)=>{
    try {
        res.status(200).send("Welcome to backend")
    } catch (error) {
        console.log(error)
    }
}

const register= async(req,res)=>{
try {
    let {username,email,phone,password}=req.body;
    let existingUser= await User.findOne({email });
    if(existingUser){
        res.status(409).send("email or user name already presant");
    }
 const createdUser = await User.create({username,email,phone,password})
//   console.log(createdUser);
 res.status(200).json({
    message:"User created Successfully",
    createdUser,
 })
   
} catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
}



} 

export {
    home,
register,

}