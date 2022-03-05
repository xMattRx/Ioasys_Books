import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

export const Login = async (email, password) =>{
  try{
  const result = await api.post('/auth/sign-in',{email: email, password: password})
  
  return result
 }catch(error){
   console.log(error);
 }
}

export const Token = async (authorization) => {
  try{
    // console.log("authorization: " + authorization)
    const token = await api.post('/auth/refresh-token', {"refreshToken": authorization});
    // console.log(token)
    
  }catch(error){
    console.log(error);
  }
}



export default api;

