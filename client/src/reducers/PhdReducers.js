import {createReducer} from '@reduxjs/toolkit'
const initialState={};

export const phdReducer=createReducer(initialState,{
	PhdRegisterRequest:(state)=>{
		state.loading=true;
	},
	PhdRegisterSuccess:(state,action)=>{
		state.loading=false;
        state.phd=action.payload.phd;
		localStorage.setItem('token',action.payload.token);
        state.isAuthenticated=true;
	},
	PhdRegisterFailure:(state,action)=>{
		state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
	},
	
})

export const allPhdReducers=createReducer(initialState,{
	AllPhdRequest:(state)=>{
		state.loading=true;
	},
	AllPhdSuccess:(state,action)=>{
		state.loading=false;
        state.allPhds=action.payload;
	},
	AllPhdFailure:(state,action)=>{
		state.loading=false;
        state.error=action.payload;
	}
})

export const allPhdPostsReducers=createReducer(initialState,{
	PhdProjectRequest:(state)=>{
		state.loading=true;
	},
	PhdProjectSuccess:(state,action)=>{
		state.loading=false;
		state.phdPost=action.payload;
	},
	PhdProjectFailure:(state,action)=>{
		state.loading=false;
        state.error=action.payload;
	}
})

export const getAllPhdProjectsReducers=createReducer(initialState,{
	AllPhdProjectRequest:(state)=>{
		state.loading=true;
	},
	AllPhdProjectSuccess:(state,action)=>{
		state.loading=false;
		state.allPhdProject=action.payload;
	},
	AllPhdProjectFailure:(state,action)=>{
		state.loading=false;
        state.error=action.payload;
	}
})
export const deletePhdProjectReducers=createReducer(initialState,{
	DeletePhdProjectRequest:(state)=>{
		state.loading=true;
	},
	DeletePhdProjectSuccess:(state)=>{
		state.loading=false;
	},
	DeletePhdProjectFailure:(state,action)=>{
		state.loading=false;
        state.error=action.payload;
	}
})

export const deletePhdReducers=createReducer(initialState,{
	DeletePhdRequest:(state)=>{
		state.loading=false;
	},
	DeletePhdSuccess:(state,action)=>{
		state.loading=false;
		state.message=action.payload.message;
	},
	DeletePhdFailure:(state,action)=>{
		state.loading=false;
		state.error=action.payload;
	}
})