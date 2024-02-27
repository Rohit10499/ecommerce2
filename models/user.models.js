import express from "express";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
     
    },
    email:{
        type:String,
        required:true,
      
    },
   password:{
   type:String,
   required:true,

   },
   phone:{
    type:String,
    required:true,


   },
   isAdmin:{
    type:Boolean,
    default:false,
   }

},{timestamps:true})

export const User=mongoose.model("User",userSchema);