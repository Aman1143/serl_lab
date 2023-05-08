import mongoose from "mongoose";

const phdProjectSchema=new mongoose.Schema({
	image:{
		public_id: String,
        url: String,
	},
	document:{
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
	mentor:{
		type:String,
		required:true,
	},
	publisher:{
     type:String,
	 required:true,
	}
});

const PhdProject=new mongoose.model("PhdProject",phdProjectSchema);
export default PhdProject;