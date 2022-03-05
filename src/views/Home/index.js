import React, { useState } from 'react';
import LogoImg from '../../assets/images/Logo.svg';
import { Login } from '../../Services/api';
import { Button, Container, ContainerInput, ContainerTitle, HomeStyle, Input, Label, Logo, PopUp } from './styles';


export default function Home() {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
//  const Submit = async () =>{
//    try{
//    const result = await api.post('/auth/sign-in',{email: email, password: password})
//    if(result.status === 200){
//      setError(false)
//    }
//   }catch(error){
//     setError(true)
//     console.log(error);
//   }
//  }
async function Submit(){
 let status = await Login(email,password)
 console.log(status)
}

  return (
    <>
    <HomeStyle/>
    <Container>
      <ContainerTitle>
         <Logo src={LogoImg}/>
         <h1>Books</h1>
      </ContainerTitle>

      <ContainerInput>
        <Label htmlFor="email">Email</Label>
        <Input id="email" onChange={(e) => setEmail(e.target.value)}value={email} type="email"/>
      </ContainerInput>
      
      <ContainerInput>
        <Label htmlFor="password">Senha</Label>
        <Input id="password" onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
        <Button onClick={Submit}>Entrar</Button>
        {error && <PopUp>Email e/ou senha incorretos.</PopUp>}
      </ContainerInput>
    </Container>
    </>
  )
}
