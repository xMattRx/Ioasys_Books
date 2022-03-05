import React, { useState } from 'react';
import LogoImg from '../../assets/images/Logo.svg';
import { Login, Token } from '../../Services/api';
import { Button, Container, ContainerInput, ContainerTitle, HomeStyle, Input, Label, Logo, PopUp } from './styles';


export default function Home() {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

async function Submit(){
 let data = await Login(email,password)
 console.log(data)
 if(data === undefined){
   setError(true);
 }else{
  const informations = data.data;
  const refresh = data.headers["refresh-token"];
  // console.log("informations: " + informations)
  // console.log("refresh: " + refresh)
  setError(false);
  Token(refresh);
 }
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
