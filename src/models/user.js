const mongoose=require('mongoose');
const { type } = require('os');
const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:Number
        }
    }
);

const User=mongoose.model("User", userSchema);
module.exports=User;
