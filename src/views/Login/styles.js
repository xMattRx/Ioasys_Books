import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";
import img from '../../assets/images/Out/Background.svg';

export const LoginStyle = createGlobalStyle`
*{
  font-family: 'Heebo', sans-serif;
  font-weight: 300;
  font-size: 28px;
  color: #fff;
}
body{
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 968px){
    background-position: 36% 0%;
  }
}
`
export const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
padding-left: 115px;

@media screen and (max-width: 968px){
  padding-left: 0px;
  align-items: center;
}

h1{
  cursor: default;
}
`
export const ContainerTitle = styled.div`
align-items: center;
justify-content: flex-start;
display: flex;
flex-direction: row;
margin-bottom: 48px;
width: 368px;

@media screen and (max-width: 390px){
  width: 288px;
}

`
export const Logo = styled.img`
width: 104.4px;
height: 36px;
padding-right: 16.6px;
`
export const ContainerInput = styled.div`
position: relative;
`
export const Label = styled.label`
color: #FFFFFF;
font-size: 12px;
opacity: 0.5;
margin-left: 16px;
margin-top: 8px;
position: absolute;
z-index:1;
`
export const Input = styled.input`
background: rgba(0, 0, 0, 0.32);
backdrop-filter: blur(2px);
border: none;
border-radius: 4px;
box-sizing: border-box;
font-size: 16px;
font-weight: 400;
height: 60px;
margin-bottom: 16px;
outline: none;
padding-bottom: 8px;
padding-left: 16px;
padding-top: 28px;
position: relative;
width: 368px;
z-index: 0;

@media screen and (max-width: 390px){
  height: 60px;
  width: 288px;
}




`
export const Button = styled.button`
background: #FFFFFF;
border-radius: 44px;
color: #B22E6F;
cursor: pointer;
font-size: 16px;
height: 36px;
font-weight: 500;
width: 85px;
border: 0;
outline: none;
left: 270px;
top: 11px;
position: absolute;

@media screen and (max-width: 390px){
  left: 190px;
}

`
export const PopUp = styled.div`
align-items: center;
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(2px);
border-radius: 4px;
display:flex;
font-size: 16px;
font-weight: 700;
height: 48px;
margin-top: 8px;
justify-content: center;
position: absolute;
width: 239px;

&:after {
    content: "";
    position: absolute;
    top: -6.9px;
    left: 12px;
    border-style: solid;
    border-width: 0 4px 6.9px 4px;
    border-color: transparent transparent rgba(255, 255, 255, 0.4); transparent;

}


`

