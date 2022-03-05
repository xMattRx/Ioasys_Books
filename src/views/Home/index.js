import React from 'react';
import LogoImg from '../../assets/images/Logo.svg';
import { Button, Container, ContainerInput, ContainerTitle, HomeStyle, Input, Label, Logo } from './styles';

export default function Home() {
  return (
    <>
    <HomeStyle/>
    <Container>
      <ContainerTitle>
         <Logo src={LogoImg}/>
         <h1>Books</h1>
      </ContainerTitle>

      <ContainerInput>
        <Label for="email">Email</Label>
        <Input id="email" type="email"/>
      </ContainerInput>
      
      <ContainerInput>
        <Label for="password">Senha</Label>
        <Input id="password" type="password"/>
        <Button>Entrar</Button>
      </ContainerInput>
    </Container>
    </>
  )
}
