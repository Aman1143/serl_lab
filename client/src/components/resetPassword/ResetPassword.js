import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { resetPassword } from '../../action/AuthAction';

const ResetPassword = () => {
	const [password,setPassword]=useState("");
	// const [token,setToken]=useState();
	const dispatch=useDispatch();
	const params=useParams();
	const navigate=useNavigate();
	const handleSubmit=(e)=>{
		e.preventDefault();
		alert("passowrd changed");
		// setToken(params.token)
		dispatch(resetPassword({token: params.token, password}));
	}
  return (
	<div className="resetPassword">
			<form onSubmit={handleSubmit}>
				<input type="password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
				<button type="submit">Reset Password</button>
			</form>
		</div>
  )
}

export default ResetPassword