import React,{useState} from 'react'
import '../faculty/FacultyRegister.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { phdRegister } from '../../action/PhdAction';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const PhdRegister = () => {
	const initialState={
		username: "", email: "",enroll:"", about:"", phone: "",mentor:"",password:"",profileImage:"",
	}
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username,setUsername]=useState("");
	const [email,setEmail]=useState("");
	const [enroll,setEnroll]=useState("");
	const [about,setAbout]=useState("");
	const [phone,setPhone]=useState("");
	const [mentor,setMentor]=useState("");
	const [password,setPassword]=useState("");
	const [profileImage,setProfileImage]=useState("");
	// const [previewSourse,setPreviewSourse]=useState("");
    // const handleChange=(e)=>{
	// 	setData({ ...data, [e.target.name]: e.target.value });
	// }
	const handleImageChange=(e)=>{
       const file=e.target.files[0];
	  const reader=new FileReader();
	  reader.readAsDataURL(file);
	  reader.onload=()=>{
		if(reader.readyState===2){
          setProfileImage(reader.result);
		}
	 }
	}
	const handleSubmit=(e)=>{
		e.preventDefault();
		dispatch(phdRegister({username:username,email:email,enroll:enroll,about:about,phone:phone,mentor:mentor,profileImage:profileImage},navigate));
		resetForm();
	}
	const resetForm = () => {
		// setData(initialState);
	}
	return (
		<>
		<Navbar />
			<div className="register">
				<div className="register_section">
					<form onSubmit={handleSubmit}>
						<label for="name">UserName:</label>
						<input type="text" id="name" name="username" onChange={(e)=>setUsername(e.target.value)} value={username} required />
						<label for="email">Email:</label>
						<input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
						
						<label for="position">About:</label>
						<input type="text" id="about" name="about" onChange={(e)=>setAbout(e.target.value)} value={about} required />

						<label for="phone">Enroll:</label>
						<input type="text" id="enroll" name="enroll" onChange={(e)=>setEnroll(e.target.value)} value={enroll} required />

						<label for="phone">Mentor:</label>
						<input type="text" id="mentor" name="mentor" onChange={(e)=>setMentor(e.target.value)} value={mentor} required />

						<label for="phone">Phone:</label>
						<input type="number" id="phone" name="phone" onChange={(e)=>setPhone(e.target.value)} value={phone} required />
						<label for="address">ProfileImage:</label>
						<input type="file" id="profileImage" accept='image/*' name="profileImage"   onChange={handleImageChange}   />
						{
							profileImage &&(
								<img src={profileImage} alt="chosen" 
								style={{
									height:'150px'

								}}
								 />
							)
						}

						<button type="submit">Register</button>
					</form>

				</div>
			</div>
			<Footer />
		</>
	)
}

export default PhdRegister