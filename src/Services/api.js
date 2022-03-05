import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

// {
//   "email": "desafio@ioasys.com.br",
//   "password": "12341234"
// }

export const Login = async (email,password) =>{
  const data = {
    "email": email, 
    "password": password
  }
  console.log(typeof(data))
  let result = await api.post('/auth/sign-in', data);
  return result;
}


