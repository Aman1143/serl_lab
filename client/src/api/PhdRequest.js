import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:5000'});
export const phdRegister=(formData)=>API.post('/api/phd/register',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
})
export const getAllPhd=()=>API.get('/api/phd/allPhd',{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
export const createPhdProject=(formData)=>API.post('/api/phd/createProject',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
export const getAllPhdProjects=()=>API.get('/api/phd/getProject',{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
})
export const deletePhd=(id)=>API.delete(`/api/phd/delete/phd/${id}`,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});