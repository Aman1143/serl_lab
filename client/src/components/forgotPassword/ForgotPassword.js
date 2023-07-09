import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from '../../action/AuthAction';

const ForgotPasswordPage = () => {
	const [email,setEmail]=useState("");
	const disPatch=useDispatch();
	
	const handleSubmit=(e)=>{
		e.preventDefault();
       disPatch(forgotPassword({email:email}));
	}
  return (
	<>
		<div className="forgotPassword">
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
				<button type="submit">Sent Token</button>
			</form>
		</div>
	</>
  )
}

export default ForgotPasswordPage