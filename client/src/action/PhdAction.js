import * as PhdApi from '../api/PhdRequest.js'

export const phdRegister=(formData,navigate)=>async(dispatch)=>{
	dispatch({type:"PhdRegisterRequest"});
	try {
		const {data}=await PhdApi.phdRegister(formData);
		dispatch({type:"PhdRegisterSuccess",payload:data});
		navigate('../',{replace:true});
		// console.log(data)
	} catch (error) {
		console.log(error) 
        dispatch({type:"PhdRegisterFailure",payload:error.response.data.message});
	}
}

export const getAllPhd=()=>async(dispatch)=>{
	dispatch({type:"AllPhdRequest"});
	try {
		const {data}=await PhdApi.getAllPhd();
		dispatch({type:"AllPhdSuccess",payload:data.allPhds});
	} catch (error) {
		console.log(error) 
        dispatch({type:"AllPhdFailure",payload:error.response.data.message});
	}
}

export const createPhdProject=(formData,navigate)=>async(dispatch)=>{
	dispatch({type:"PhdProjectRequest"})
	try {
		const {data}=await PhdApi.createPhdProject(formData);
		dispatch({type:"PhdProjectSuccess",payload:data.phdPost})
		console.log(data)
		console.log("hello from action ")
		navigate('../',{replace:true});		
	} catch (error) {
		console.log(error) 
        dispatch({type:"PhdProjectFailure",payload:error.response.data.message});
	}
}
export const getAllPhdProjects=()=>async(dispatch)=>{
   dispatch({type:"AllPhdProjectRequest"});
   try {
	    const {data}=await PhdApi.getAllPhdProjects();
		dispatch({type:"AllPhdProjectSuccess",payload:data.allPhdProject});
		// console.log(data)
		// console.log("hekhhe")
   } catch (error) {
	console.log(error) 
	dispatch({type:"AllPhdProjectFailure",payload:error.response.data.message});
   }
}


export const deletePhd=(id,navigate)=>async(dispatch)=>{
	dispatch({type:"DeletePhdRequest"});
	try {
	   const {data}=await PhdApi.deletePhd(id);
	   dispatch({type:"DeletePhdSuccess",payload:data});
	   console.log("delete0")
	   navigate('../',{replace:true})
	} catch (error) {
	 dispatch({type:"DeletePhdFailure",payload:error.response.data.message});
	}
 }