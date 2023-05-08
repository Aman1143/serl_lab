import Phd from '../models/phd.js'
import PhdProject from '../models/PhdProject.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cloudinary from '../utils/cloudinary.js';
import User from '../models/Auth.js'

export const phdRegister = async (req, res) => {
	try {
		const { username, email, enroll, mentor, about, profileImage, phone } = req.body;
		const oldUser = await Phd.findOne({ email });
		if (oldUser) return res.status(400).json({
			message: "phd scholar already exists",
			success: false,
		})
		const uploadResponse = await cloudinary.uploader.upload(profileImage, {
			upload_preset: 'opnnk8pe',
		});
		const phd = await Phd.create({
			username,
			email,
			about,
			enroll,
			mentor,
			profileImage: {
				public_id: uploadResponse.public_id,
				url: uploadResponse.secure_url,
			},
			phone,
			// userId:id,
		});
		await phd.save();
		let token = jwt.sign({ email: phd.email, id: phd._id }, process.env.JWT_KEY,{
			expiresIn:30*24*60*60*1000,
		});
		res.status(200).json({
			phd,
			token,
			message: 'faculty registerd',
			success: true,
		})

	} catch (error) {
		console.log(error)
		res.send(error);
	}
}

export const getAllPhd = async (req, res) => {
	try {
		const allPhds = await Phd.find();
		res.status(200).json({
			allPhds,
			message: "all phd acholar are here",
			success: true,
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

export const createPhdProject = async (req, res) => {
	try {

		const { description, link, mentor,publisher } = req.body;
		console.log(req.body)
		const phdPost = await PhdProject.create({
			description,
			link,
			mentor,
		    publisher,
			
		});
		console.log("hello2222")

		await phdPost.save();
		res.status(200).json({
			success: true,
			message: "phd post created",
			phdPost,
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

// export const deleteProject = async (req, res) => {
// 	try {
// 		const project = await PhdProject.findById(req.params.id);
// 		if (!project) {
// 			return res.status(404).json({
// 				success: false,
// 				message: "Project not found",
// 			});
// 		}
// 		const phdOwner = await Phd.findById(req.user._id );
// 		if (project.owner.toString() !== phdOwner._id.toString()) {
// 			return res.status(401).json({
// 				success: false,
// 				message: "Unauthorized",
// 			});
// 		}
// 		await cloudinary.v2.uploader.destroy(project.image.public_id);
// 		await cloudinary.v2.uploader.destroy(project.document.public_id);

// 		await project.remove();
// 		await phdOwner.project.indexOf(req.params.id);
// 		await phdOwner.project.splice(index, 1);
// 		await phdOwner.save();

// 		res.status(200).json({
// 			success: true,
// 			messsage: "Project deleted",
// 		})

// 	} catch (error) {
// 		res.status(500).json({
// 			success: false,
// 			message: error.message,
// 		});
// 	}
// }

export const getAllPhdProject = async (req, res) => {
	try {
		const allPhdProject = await PhdProject.find();
		res.status(200).json({
			allPhdProject,
			message: "all phd acholar are here",
			success: true,
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

export const deletePhd=async(req,res)=>{
	console.log("phd")
	try {
		const phd=await Phd.findById(req.params.id);
		if(!phd)
		{
			return res.status(404).json({
				message:"Phd Not Found",
				success:false,
			})
		}

		await cloudinary.v2.uploader.destroy(phd.profileImage.public_id);
		// console.log("photo removed");
		await phd.deleteOne();		
		console.log("phd removed");
		res.status(200).json({
			message:"FAculty deleted",
			success:true,
		})

		
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}