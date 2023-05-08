import mongoose from "mongoose";

const facultyProjectSchema=new mongoose.Schema({
	image:{
		public_id: String,
        url: String,
	},
	description:{
		type:String,
		required:true,
	},
	link:{
      type:String,
	  unique:true,
	},
	publisher:{
		type:String,
	},
});

const FacultyProject=new mongoose.model("FacultyProject",facultyProjectSchema);
export default FacultyProject;