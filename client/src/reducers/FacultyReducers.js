import {createReducer} from '@reduxjs/toolkit'
const initialState={};

export const facultyReducer=createReducer(initialState,{
	FacultyRegisterRequest:(state)=>{
		state.loading=true;
	},
	FacultyRegisterSuccess:(state,action)=>{
		state.loading=false;
        state.faculty=action.payload;
        state.isAuthenticated=true;
	},
	FacultyRegisterFailure:(state,action)=>{
		state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
	}
})

export const allFacultyReducers=createReducer(initialState,{
	AllFacultyRequest:(state)=>{
		state.loading=true;
	},
	AllFacultySuccess:(state,action)=>{
		state.loading=false;
        state.allFaculty=action.payload;
	},
	AllFacultyFailure:(state,action)=>{
		state.loading=false;
        state.error=action.payload;
	}
})

export const allFacultyPostsReducers=createReducer(initialState,{
	FacultyProjectRequest:(state)=>{
		state.loading=true;
	},
	FacultyProjectSuccess:(state,action)=>{
		state.loading=false;
		state.facultyPost=action.payload;
	},
	FacultyProjectFailure:(state,action)=>{
		state.loading=false;
        state.error=action.payload;
	}
})

export const getAllFacultyProjectsReducers=createReducer(initialState,{
	AllFacultyProjectRequest:(state)=>{
		state.loading=true;
	},
	AllFacultyProjectSuccess:(state,action)=>{
		state.loading=false;
		state.allFacultyProject=action.payload;
	},
	AllFacultyProjectFailure:(state,action)=>{
		state.loading=false;
        state.error=action.payload;
	}
})

export const deleteFacultyReducers=createReducer(initialState,{
	DeleteFacultyRequest:(state)=>{
		state.loading=true;
	},
	DeleteFacultySuccess:(state,action)=>{
		state.loading=false;
		state.message=action.payload.message;
	},
	DeleteFacultyFailure:(state,action)=>{
		state.loading=false;
		state.error=action.payload;
	}
})