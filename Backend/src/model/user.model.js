const { default: mongoose, Schema } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"Please enter the Name"]
    },
    email:{
        type:String,
        unique:[true,"Email must be unique"],
        require:[true,"Please enter Email"]
    },
    password:{
        type:String,
        require:[true,"Please enter Password"]
    },
    role:{
        type:String,
        enum:["student","teacher","admin"],
        default:"student"
    }
    
})
const UserModel = mongoose.model("Users",userSchema)


module.exports = UserModel