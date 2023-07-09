import *as  AuthApi from '../api/AuthRequest.js'
export const signUp=(formData,navigate)=>async (dispatch)=>{
    dispatch({type:"RegisterRequest"});
    try {
    const {data}=await AuthApi.signUp(formData);
        dispatch({type:'RegisterSuccess',payload:data});
        navigate('../',{replace:true});
    } catch (error) {
        console.log(error) 
        dispatch({type:"RegisterFailure",payload:error.response.data.message});
    }
}
export const login=(formData,navigate)=>async (dispatch)=>{
    dispatch({type:"LoginRequest"});
    try {
    const {data}=await AuthApi.login(formData);
        dispatch({type:'LoginSuccess',payload:data});
        navigate('../',{replace:true});
    } catch (error) {
        console.log(error) 
        dispatch({type:"LoginFailure",payload:error.response.data.message});
    }
}

export const forgotPassword=(formData)=>async(dispatch)=>{
    dispatch({type:"ForgotPasswordRequest"});
    try {
        const {data}=await AuthApi.forgotPassword(formData);
        dispatch({type:"ForgotPasswordSuccess",payload:data.user});

    } catch (error) {
        console.log(error) 
        dispatch({type:"ForgotPasswordFailure",payload:error.response.data.message});
    }
}
export const resetPassword = ({token, password}) => async (dispatch) => {
    dispatch({ type: "ResetPasswordRequest" });
    try {
      const { data } = await AuthApi.resetPassword(token, { password });
      dispatch({ type: "ResetPasswordSuccess", payload: data.user });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ResetPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const logout=(navigate)=>async(dispatch)=>{
    dispatch({ type: "LogoutRequest" });
    try {
      const { data } = await AuthApi.logout();
      dispatch({ type: "LogoutSuccess", payload: data });
      navigate('../',{replace:true});
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LogoutFailure",
        payload: error.response.data.message,
      });
    }
  }
  