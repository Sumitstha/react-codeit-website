import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { authReducer } from '../store/authStore';


const AuthWrapper = ({children}) => {
  const authCtx=useSelector((state)=>state.authReducer);
  const {isLoggedIn}=authCtx;
    // const[isLoggedIn,setIsLoggedIn]=useState(false);
    if (!isLoggedIn) {
        window.location.href = "/login";
      }
  return (
    <>{children}</>
  )
};

export {AuthWrapper};
 