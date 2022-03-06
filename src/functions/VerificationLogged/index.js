import React from 'react';
import { Navigate } from 'react-router-dom';

export function VerificationLogged({children}) {
  const isAuth = sessionStorage.getItem('refreshToken');
  if(isAuth){
    return children
  } else{
    return <Navigate to="/"/>
  }
}
