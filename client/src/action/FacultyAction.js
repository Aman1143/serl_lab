import * as FacultyApi from '../api/FacultyRequest.js'

export const facultyRegister=(formData)=>async(dispatch)=>{
	dispatch({type:"FacultyRegisterRequest"});
	try {
		const {data}=await FacultyApi.facultyRegister(formData);
		dispatch({type:"FacultyRegisterSuccess",payload:data.faculty});
		// navigate('../',{replace:true});
	} catch (error) {
		console.log(error) 
        dispatch({type:"FacultyRegisterFailure",payload:error.response.data.message});
	}
}

export const getAllfaculty=()=>async(dispatch)=>{
	dispatch({type:"AllFacultyRequest"});
	try {
		const {data}=await FacultyApi.getAllfaculty();
		dispatch({type:"AllFacultySuccess",payload:data.allFaculty});
	} catch (error) {
		console.log(error) 
        dispatch({type:"AllFacultyFailure",payload:error.response.data.message});
	}
}

export const createFacultyProject=(formData,navigate)=>async(dispatch)=>{
	dispatch({type:"FacultyProjectRequest"})
	try {
		// console.log("in try catch blog");
		const {data}=await FacultyApi.createFacultyProject(formData);
		dispatch({type:"FacultyProjectSuccess",payload:data.facultyPost})
		// console.log("action performed");
		navigate('../',{replace:true});		

		// console.log(data);
	} catch (error) {
		console.log(error) 
        dispatch({type:"FacultyProjectFailure",payload:error.response.data.message});
	}
}
export const getAllFacultyProjects=()=>async(dispatch)=>{
   dispatch({type:"AllFacultyProjectRequest"});
   try {
	    const {data}=await FacultyApi.getAllFacultyProjects();
		dispatch({type:"AllFacultyProjectSuccess",payload:data.allFacultyProject});
		// console.log(data)
		// console.log("hekhhe")
   } catch (error) {
	console.log(error) 
	dispatch({type:"AllFacultyProjectFailure",payload:error.response.data.message});
   }
}

export const deleteFaculty=(id,navigate)=>async(dispatch)=>{
   dispatch({type:"DeleteFacultyRequest"});
   try {
	  const {data}=await FacultyApi.deleteFaculty(id);
	  dispatch({type:"DeleteFacultySuccess",payload:data});
	  console.log("delete0")
	  navigate('../',{replace:true})
   } catch (error) {
	dispatch({type:"DeleteFacultyFailure",payload:error.response.data.message});
   }
}