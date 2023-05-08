import {createReducer} from '@reduxjs/toolkit'
const initialState={};
export const userReducer=createReducer(initialState,{
    RegisterRequest:(state)=>{
        state.loading=true;
    },
    RegisterSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload.user;
        localStorage.setItem('token',action.payload.token);
        state.isAuthenticated=true;
    },
    RegisterFailure:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    },
    LoginRequest:(state)=>{
        state.loading=true;
    },
    LoginSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload.user;
        localStorage.setItem('token', action.payload.token);
        state.isAuthenticated=true;
    },
    LoginFailure:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    },
    ForgotPasswordRequest:(state)=>{
        state.loading=true;
    },
    ForgotPasswordSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true;
    },
    ForgotPasswordFailure:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    },
    ResetPasswordRequest:(state)=>{
        state.loading=true;
    },
    ResetPasswordSuccess:(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true;
    },
    ResetPasswordFailure:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    },
    LogoutRequest: (state) => {
        state.loading = true;
      },
      LogoutSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      },
      LogoutFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
      },
})