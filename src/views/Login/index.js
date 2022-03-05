import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/Out/Logo.svg';
import { AccessingHome, Token } from '../../Services/api';
import { Button, Container, ContainerInput, ContainerTitle, Input, Label, LoginStyle, Logo, PopUp } from './styles';

export default function Login() {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  async function Submit(){
  let data = await AccessingHome(email,password)

 if(data === undefined){
  setError(true);
 }else{
  setError(false);
  const refresh = data.headers["refresh-token"];
  const statusToken = await Token(refresh);
  if(statusToken === 204){
    const informations = JSON.stringify(data.data);
    const authorization = data.headers["authorization"];
    sessionStorage.setItem('informations',informations);
    sessionStorage.setItem('refreshToken',refresh);
    sessionStorage.setItem('authorization',authorization);
    navigate('/Home/1');
  }
 }

  }

  return (
    <>
    <LoginStyle/>
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
