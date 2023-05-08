import mongoose from "mongoose";
const phdSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
     enroll:{
        type:String,
    },
    about:{
        type:String,
    },
    profileImage:{
        public_id: String,
        url: String,
    },
    phone:{
        type:Array,
    },
    mentor:{
        type:String,
    },
    project:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PhdProject",
        }
    ],
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true});

const Phd=new mongoose.model('Phd',phdSchema);

export default Phd;