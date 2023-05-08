import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';

import './Auth.css'
import { login, signUp } from '../../action/AuthAction';

const Auth = () => {
	const initialSate = {
		firstName: "", lastName: "", email: "", password: "", role: ""
	}
	const options = ['Faculty', 'User', 'Phd'];
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [data, setData] = useState(initialSate);
	const [isSignUp, setSignUp] = useState(true)
	const resetForm = () => {
		setData(initialSate);
	}
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignUp) {
			dispatch(signUp(data, navigate));
		}
		else {
			dispatch(login(data, navigate));
		}
		resetForm();
	}
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="main">
					<div className="heading">
						<h1>Authentication</h1>
					</div>
					<div className="data_container">
						<div className="input_section">
							<form action="post" onSubmit={handleSubmit}>
								{
									isSignUp && (
										<div className="input_dappa">
											<div className="label_box">
												<label htmlFor="firstName">FirstName:</label>
											</div>
											<div className="input">
												<input type="text" name="firstName" id="" required value={data.firstName} onChange={handleChange} autoComplete='off' />
											</div>
										</div>
									)
								}
								{
									isSignUp && (
										<div className="input_dappa">
											<div className="label_box">
												<label htmlFor="firstName">LastName:</label>
											</div>
											<div className="input">
												<input type="text" name="lastName" id="" required value={data.lastName} onChange={handleChange} autoComplete='off' />
											</div>
										</div>
									)
								}
								<div className="input_dappa">
									<div className="label_box">
										<label htmlFor="email">Email:</label>
									</div>
									<div className="input">
										<input type="email" name="email" id="" required value={data.email} onChange={handleChange} autoComplete='off' />
									</div>
								</div>
								<div className="input_dappa">
									<div className="label_box">
										<label htmlFor="password">Password:</label>
									</div>
									<div className="input">
										<input type="password" name="password" required id="" value={data.password} onChange={handleChange} autoComplete='off' />
									</div>
									{
										!isSignUp && (
											<div className="forgot">
												<Link to='/forgot/password' style={{ textDecoration: 'none' }}><h4 style={{ borderBottom: '2px solid black', cursor: 'pointer' }} >Forgot password ?</h4></Link>
											</div>
										)
									}
								</div>
								{
									isSignUp && (
										<div className="input_dappa">
											<div className="label_box">
												<label htmlFor="role">Role:</label>
											</div>
											<div className="input">
												<select value={data.role} name='role' onChange={handleChange}>
													<option>---choose only one option----</option>
													<option  >User</option>
													<option >Faculty</option>
													<option >Phd</option>
													<option >Admin</option>
												</select>
												{/* <select onChange={handleChange}>
													<option>--Please choose one option--</option>
													{options.map((option, index) => {
														return <option key={index} value={data.role} name="role" >
															{option}
														</option>
													})}
												</select> */}
											</div>
										</div>
									)
								}

								<div className="input_dappa">
									<div className='input_dappa '>
										<div className="btn_box">
											<button className='btn' type="submit" >{isSignUp ? 'Sign In' : 'Login'}</button>
										</div>
										<div className="new">
											<span
												style={{
													cursor: "pointer",
													textDecoration: "underline",
													fontFamily: 'Signika Negative',
												}}
												onClick={() => {
													resetForm();
													setSignUp((prev) => !prev);
												}}
											>{isSignUp ? "Already have an account Login ?" : "Don't have an account Sign up ?"}</span>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Auth