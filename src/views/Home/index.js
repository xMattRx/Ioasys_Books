import React from 'react';
import ArrowImg from '../../assets/images/In/Arrow.svg';
import Logo from '../../assets/images/In/Logo.svg';
import ShapeImg from '../../assets/images/In/Shape.svg';
import { Arrow, Background, BodyContainer, BookBlock, HeaderContainer, IconContainer, Shape, SignOut, TextContainer, TextIconContainer, Title } from './styles';

export default function Home() {

  
  return (
    <>
    <Background/>
     <header>
       <HeaderContainer>
          <TextContainer>
          <img src={Logo}/> 
          <Title>Books</Title>
          </TextContainer>
          <SignOut>
            <TextIconContainer>
             Bem vindo, <span>Guilherme!</span>
            </TextIconContainer>
            <IconContainer>
              <Arrow src={ArrowImg}/>
              <Shape src={ShapeImg}/>
            </IconContainer>
          </SignOut>
       </HeaderContainer>
     </header>
      <main>
        <BodyContainer>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
          <BookBlock/>
        </BodyContainer>
      </main>
    </>
  )
}
