import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar.js'
import Footer from '../../components/footer/Footer.js'
import { createFacultyProject } from '../../action/FacultyAction.js'

const FacultyProject = () => {
	  const dispatch = useDispatch();
	  const navigate=useNavigate();
	  const [image,setImage]=useState("");
	  const [description,setDescription]=useState("");
	  const [link,setLink]=useState("");
	  const [publisher,setPublisher]=useState("");
	  const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createFacultyProject({description:description,link:link,publisher:publisher},navigate))
		// resetForm();
	  };
	//   const handleImageChange = (e) => {
	// 	const file = e.target.files[0];
	// 	const reader = new FileReader();
	// 	reader.readAsDataURL(file);
	// 	reader.onload = () => {
	// 	  if (reader.readyState === 2) {
	// 		// setData({...data,image:reader.result})
	// 		setImage(reader.result);
	// 	  }
	// 	}
	//   }

	  return (
		<>
		<Navbar />
		  <div className="post_container">
		  <h1></h1>
			<form action="" onSubmit={handleSubmit}>
			  <label htmlFor="description">Description</label>
			  <textarea name="description" id="" cols="30" rows="10" placeholder='Explain something...' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
	
			  <label htmlFor="url">Url:</label>
			  <input type="url" name="link" value={link} onChange={(e)=>setLink(e.target.value)} />
			  <div>
					<label htmlFor="publisher">Publisher:</label>
					<input type="text" name="publisher" value={publisher} onChange={(e)=>setPublisher(e.target.value)} />
				  </div>
			  <button type="submit">Submit</button>
			</form>
		  </div>
		  <Footer />
		</>
	  )
	}

export default FacultyProject