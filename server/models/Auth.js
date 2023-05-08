import mongoose from "mongoose";
import crypto from 'crypto';


const  userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
})

userSchema.methods.getResetPasswordToken=function(){
    const resetToken=crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken=crypto
                            .createHash("sha256")
                            .update(resetToken)
                            .digest("hex");
    this.resetPasswordExpire=Date.now()+15*60*1000;
    return resetToken;
}
const UserModel=new mongoose.model("User",userSchema);


export default UserModel;