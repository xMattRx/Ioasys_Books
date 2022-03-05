import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";
import img2 from '../../assets/images/In/1Background.svg';
import img4 from '../../assets/images/In/2Background.svg';

export const Background = createGlobalStyle`
*{
  font-family: 'Heebo', sans-serif;
}
body{
  background: url(${img2}), url(${img4});
  background-blend-mode: darken;
  transform: matrix(1, 0, 0, -1, 0, 0), transform: rotate(-180deg);
}
`
export const HeaderContainer = styled.div`
align-items: center;
box-sizing: border-box;
display: flex;
justify-content: space-between;
margin: 0 auto;
margin-top: 40px;
margin-left: 115px;
margin-right: 120px;
width: 1130px;
`
export const TextContainer = styled.div`
display: flex;
`
export const Title = styled.h1`
color: #333;
cursor: default;
font-weight: 300;
font-size: 28px;
line-height: 40px;
margin-left: 16px;
`
export const SignOut = styled.div`
display: flex;
align-items: center;
`
export const IconContainer = styled.div`
align-items: center;
border-radius: 50%;
border: 1px solid rgba(51, 51, 51, 0.2);
box-sizing: border-box;
cursor: pointer;
display: flex;
height: 32px;
justify-content: center;
transform: matrix(-1, 0, 0, 1, 0, 0);
width: 32px;
`
export const TextIconContainer = styled.div`
color: #333;
font-size: 12px;
font-weight: 400;
line-height: 16px;
margin-right: 16px;

span{
  font-weight: 500;
}
`
export const Arrow = styled.img`
height: 8px;
width: 10.5px;
transform: rotate(180deg);
`
export const Shape = styled.img`
height: 14px;
width: 5.5px;
transform: rotate(180deg);
`
export const BodyContainer = styled.div`
display: flex;
flex-wrap: wrap;
height: 512px;
justify-content: space-between;
margin-top: 40px;
margin-left: 115px;
margin-right: 114px;
width:1130px;

`
