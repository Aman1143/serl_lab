import Faculty from '../models/faculty.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cloudinary from '../utils/cloudinary.js'
import FacultyProject from '../models/FacProject.js';

export const facultyRegister = async (req, res) => {
	try {
		const { username, email, address, position, profileImage, phone, personalEmail } = req.body;
		// console.log(req.body)
		const oldUser = await Faculty.findOne({ email });
		if (oldUser) return res.status(400).json({
			message: "Faculty already exists",
			success: false,
		})
		// const fileStr = profileImage;
        const uploadResponse = await cloudinary.v2.uploader.upload(profileImage, {
            upload_preset: 'opnnk8pe',
        });	
		// console.log(uploadResponse);
			const faculty =await Faculty.create({
			username,
			email,
			address,
			position,
			profileImage:{
				public_id: uploadResponse.public_id,
                url: uploadResponse.secure_url,
			},
			phone,
			personalEmail,
		});
      faculty.save();
		console.log(faculty);
		let token = jwt.sign({ email: faculty.email, id: faculty._id }, process.env.JWT_KEY);
		res.status(200).json({
			faculty,
			token,
			message: 'faculty registerd',
			success: true,
		})

	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

export const getAllfaculty=async(req,res)=>{
	try {
		const allFaculty=await Faculty.find();
		res.status(200).json({
			allFaculty,
			message: "all phd acholar are here",
			success: true,
		})	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

export const createFacultyProject = async (req, res) => {
	try {
		const { description, link,publisher } = req.body;
		const facultyPost = await FacultyProject.create({
			description,
			link,
			publisher,	
		});
		await facultyPost.save();
		// console.log('post is saved');
		res.status(200).json({
			success: true,
			message: "faculty post created",
			facultyPost,
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

export const deleteProject = async (req, res) => {
	try {
		const project = await facultyPost.findById(req.params.id);
		if (!project) {
			return res.status(404).json({
				success: false,
				message: "Project not found",
			});
		}
		const phdOwner = await Phd.findById(req.user._id );
		if (project.owner.toString() !== phdOwner._id.toString()) {
			return res.status(401).json({
				success: false,
				message: "Unauthorized",
			});
		}
		// await cloudinary.v2.uploader.destroy(project.image.public_id);
		// await cloudinary.v2.uploader.destroy(project.document.public_id);

		// await project.remove();
		// await phdOwner.project.indexOf(req.params.id);
		// await phdOwner.project.splice(index, 1);
		// await phdOwner.save();

		res.status(200).json({
			success: true,
			messsage: "Project deleted",
		})

	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
}

export const getAllFacultyProject = async (req, res) => {
	try {
		const allFacultyProject = await FacultyProject.find();
		res.status(200).json({
			allFacultyProject,
			message: "all phd acholar are here",
			success: true,
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

export const deleteFaculty = async (req, res) => {
	try {
	  const faculty = await Faculty.findById(req.params.id);
	  if (!faculty) {
		return res.status(404).json({
		  message: "Faculty Not Found",
		  success: false,
		});
	  }
	  await cloudinary.v2.uploader.destroy(faculty.profileImage.public_id);
	  console.log("photo removed");
	  await faculty.deleteOne(); // use `deleteOne()` instead of `remove()`
	  res.status(200).json({
		message: "Faculty deleted",
		success: true,
	  });
	} catch (error) {
	  console.log(error);
	  res.status(500).send(error);
	}
  };
  