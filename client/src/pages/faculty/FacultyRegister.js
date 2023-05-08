import React,{useState} from 'react'
import './FacultyRegister.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { facultyRegister } from '../../action/FacultyAction';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const FacultyRegister = () => {
	const initialState={
		username: "", email: "", position: "", phone: "", personalEmail: "",address:"",profileImage:""
	}
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [data, setData] = useState(initialState);
	const [img, setImg] = useState("");

    const handleChange=(e)=>{
		setData({ ...data, [e.target.name]: e.target.value });
	}
	const handleSubmit=(e)=>{
		e.preventDefault();
		dispatch(facultyRegister(data));
		resetForm();
	}
	const handleImageChange=(e)=>{
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
		  if (reader.readyState === 2) {
			setData({...data,profileImage:reader.result})
			setImg(reader.result);
		  }
		}
	 }
	const resetForm = () => {
		setData(initialState);
	}
	return (
		<>
		<Navbar />
			<div className="register">
				<div className="register_section">
					<form onSubmit={handleSubmit}>
						<label for="name">UserName:</label>
						<input type="text" id="name" name="username" onChange={handleChange} value={data.username} required />
						<label for="email">Email:</label>
						<input type="email" id="email" name="email" onChange={handleChange} value={data.email} required />
						
						<label for="position">Position:</label>
						<input type="text" id="position" name="position" onChange={handleChange} value={data.position} required />

						<label for="phone">Phone:</label>
						<input type="number" id="phone" name="phone" onChange={handleChange} value={data.phone} required />

						<label for="personalEmail">PersonalEmail:</label>
						<input type="email" id="email" name="personalEmail" onChange={handleChange} value={data.personalEmail} required />
						<label for="address">Address:</label>
						<input type="text" id="address" name="address" onChange={handleChange} value={data.address} required />
						 
						<label for="address">ProfileImage:</label>
						<input type="file" id="profileImage" name="img" onChange={handleImageChange}   />

						<button type="submit">Register</button>
					</form>

				</div>
			</div>
			<Footer />
		</>
	)
}

export default FacultyRegister


