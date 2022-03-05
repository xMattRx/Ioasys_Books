
import { Navigate } from 'react-router-dom';

const isAuth = sessionStorage.getItem('refreshToken');
// var url_atual = window.location.href.split("/")[3];

export function VerificationLogged({children}) {
  if(!isAuth){
    return <Navigate to="/"/>
  } 
  return children
}
