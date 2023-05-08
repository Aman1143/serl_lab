import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:5000'});
export const signUp=(formData)=>API.post('/api/users/register',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
export const login=(formData)=>API.post('/api/users/login',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
export const forgotPassword=(formData)=>API.post('/api/users/password/forgot',formData)
export const resetPassword=(token,password)=>API.put(`/api/users/password/reset/${token}`,password)
export const logout=()=>API.get('/api/users/logout',{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});