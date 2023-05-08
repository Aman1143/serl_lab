import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:5000'});
export const facultyRegister=(formData)=>API.post('/api/faculty/register',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
})
export const createFacultyProject=(formData)=>API.post('/api/faculty/createProject',formData,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
export const getAllFacultyProjects=()=>API.get('/api/faculty/getProject',{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
})
export const getAllfaculty=()=>API.get('/api/faculty/allFaculty',{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});
export const deleteFaculty=(id)=>API.delete(`/api/faculty/delete/faculty/${id}`,{
	headers: {
		Authorization: `JWT ${localStorage.getItem('token') || ""}`
	}
});