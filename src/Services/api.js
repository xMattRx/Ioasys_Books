import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

export const AccessingHome = async (email, password) =>{
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
    return token.status

  }catch(error){
    console.log(error);
  }
}



export default api;

