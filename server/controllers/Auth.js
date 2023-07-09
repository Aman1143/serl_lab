import User from '../models/Auth.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendEmail from '../utils/sendEmail.js';
import crypto from 'crypto'

export const register = async (req, res) => {
	try {
		const { firstName, lastName, email, password, role } = req.body;
		const oldUser = await User.findOne({ email });
		if (oldUser) return res.status(400).json({
			message: "User already exists",
			success: false,
		})
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);
		const user = await User.create({
			firstName,
			lastName,
			password: hashPassword,
			email,
			role
		})
		user.save();
		//   console.log(user)
		const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, {
			expiresIn: 30 * 24 * 60 * 60 * 1000
		});

		res.status(200).json({
			user,
			token,
			message: 'user registerd',
			success: true,
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}
export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log(req.body)
		const user = await User.findOne({ email });
		if (!user) return res.status(404).json("User not found");
		const validity = await bcrypt.compare(password, user.password);
		if (!validity) return res.status(403).json("Invalid credensitial")
		const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, {
			expiresIn: 30 * 24 * 60 * 60 * 1000
		});
		res.status(200).json({
			user,
			token,
			message: "User logged In"
		})
	} catch (error) {
		console.log(error)
		res.status(500).send(error);
	}
}

export const forgotPassword = async (req, res) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			console.log("User not exits");
			return res.status(404).json({
				message: "Usr Not Found",
				success: false,
			})
		}
		const resetToken = user.getResetPasswordToken();
		await user.save();
		const resetUrl = `${req.protocol}://${req.get("host")}/api/users/reset/${resetToken}`;
		const nrrestUrl = `${req.protocol}://localhost:3000/api/users/password/reset/${resetToken}`;

		const message = `Your password reset token is :- \n\n ${nrrestUrl} \n\n If you have not requested this email then, please ignore it`
		try {
			await sendEmail({
				email: user.email,
				subject: `Serl lab`,
				message
			})
			res.status(200).json({
				user,
				success: true,
				message: `Email sent to ${user.email}`,
			});
		} catch (error) {
			user.resetPasswordToken = undefined;
			user.resetPasswordExpire = undefined;

			await user.save();

			res.status(500).json({
				success: false,
				message: error.message,
			});
		}

	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
}

export const resetPassword = async (req, res) => {
	// const mem=await User.findOne(req.params.token);
	// console.log(mem);
	console.log("member");
	try {
		const resetPasswordToken = crypto
			.createHash("sha256")
			.update(req.params.token)
			.digest("hex");
		const user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpire: { $gt: Date.now() }
		})
		if (!user) {
			return res.status(401).json({
				success: false,
				message: "Token is invalid or has expired",
			});
		}
		console.log(user);
		const salt = await bcrypt.genSalt(10);
		console.log(req.body.password);
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		user.password = hashPassword;
		console.log("password has been changed")
		console.log(hashPassword);

		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;
		await user.save();
		console.log("user saved");
		const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY);
		res.status(200).json({
			user,
			token,
			message: "Password updated"
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}

}

export const logout=async(req,res)=>{
	// console.log(req.headers.authorization);
   try {
	req.headers.authorization=null;
	res.status(200).json({
		message:"user logout"
	})	
   } catch (error) {
	res.status(500).json({
		success: false,
		message: error.message,
	});
   }
}