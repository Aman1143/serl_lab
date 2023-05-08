import mongoose from "mongoose";

const facultyShema=new mongoose.Schema({
	username: {
		type: String,
		required:true,
	},
	email: {
        type: String,
        required: true,
    },
    address:{
        type:String,
    },
    position:{
        type:String,
    },
    profileImage:{
        public_id: String,
        url: String,
    },
    phone:{
        type:Number,
    },
    website:{
        type:Array,
    },
    personalEmail:{
        type:String,
    },
    project:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FacultyProject",
        }
    ],
},{
    timestamps:true,
})

const Faculty=new mongoose.model("Faculty",facultyShema);

export default Faculty;