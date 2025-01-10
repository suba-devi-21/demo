const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt= require('jsonwebtoken')
const {SECRET_KEY} = require("../utils/config")

const authController = {
    register:async (req,res)=>{
        try{
            const {name,email,password} = req.body;
           
            const user = await User.findOne({email})

            if (user){
                return res.status(400).json({message:"User already exists"})
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = new User({name,email,password:hashedPassword})
            newUser.save()
            res.status(201).json({message:"User registered successfully"})

           
        }
        catch(err){
          res.status(500).json({message:err.message})
        }
    },


    // -------------------------------------------------------------------------------


    login:async(req, res)=>{
        try{
            const {email,password} = req.body;
            const user = await User.findOne({email})

            if(!user){
                return res.status(400).json({message:"User not found"})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(400).json({message:"Invalid credentials"})
            }

            const token = jwt.sign({id:user._id}, SECRET_KEY)
            res.json({token,method:"logged in successfully"})
        }
        catch(err){
          res.status(500).json({message:err.message})
        }
    },

    // -----------------------------------------------------------------------------


    logout:(req, res)=>{
        try{

        }
        catch(err){
          res.status(500).json({message:err.message})
        }
    },


    // ---------------------------------------------------------------------------------


    getUserInfo:async(req, res)=>{
        try{
           const userId = req.userId
           const user = await User.findById(userId)
           res.json({user})
        }
        catch(err){
          res.status(500).json({message:err.message})
        }
    }
}

module.exports = authController;