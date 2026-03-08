const express = require("express");
const UserModel = require("./model/user.model");
const  app = express();

app.use(express.json()); 


app.post("/signup",(req,res)=>{
    const {name,email,password,role} = req.body;

    const user = UserModel.create({name,email,password,role})

    res.status(201).json({
        message:"User is created",
        name,email,password,role         
    })
    res.status(500).json({
        message:"Unable to crete new user",
        error: error.message
    })
})

module.exports = app;