import React from 'react';
import { Navigate } from 'react-router-dom';



// var url_atual = window.location.href.split("/")[3];

export function VerificationLogged({children}) {
  const isAuth = sessionStorage.getItem('refreshToken');
  if(isAuth){
    return children
  } else{
    console.log("isAuthNão: " + isAuth)
    console.log("Não")
    return <Navigate to="/"/>
  }
 
}
