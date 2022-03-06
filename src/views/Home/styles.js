import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";
import img2 from '../../assets/images/In/1Background.svg';
import img4 from '../../assets/images/In/2Background.svg';

export const Background = createGlobalStyle`
*{
  font-family: 'Heebo', sans-serif;
}
body{
  background: url(${img2}), url(${img4}) no-repeat;
  background-blend-mode: darken;
  transform: matrix(1, 0, 0, -1, 0, 0), transform: rotate(-180deg);
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 842px){
  align-items: center;
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

@media screen and (max-width: 671px){
  width: 288px;
  margin: 0 auto;
  margin-top: 40px;
}

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

@media screen and (max-width:670px){
  display: none;
}

span{
  font-weight: 500;
}
`
export const ArrowIcon = styled.img`
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
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
/* display: flex;
flex-wrap: wrap; */
justify-content: space-around;
margin-top: 40px;
margin-left: 115px;
margin-right: 114px;

@media screen and (max-width: 1344px){
  grid-template-columns: 1fr 1fr 1fr ;
  margin-left: 170px;
}
@media screen and (max-width: 1114px){
  grid-template-columns: 1fr 1fr;
  margin-left: 170px;
}
@media screen and (max-width: 842px){
  grid-template-columns: 1fr;
  margin-left: 0px;
  margin-right: 0px;
}
`
export const Pagination = styled.div`
align-items: center;
box-sizing: border-box;
display: flex;
justify-content: flex-end;
margin: 0 auto;
margin-left: 115px;
margin-right: 120px;
margin-top: 16px;
margin-bottom: 88px;

@media screen and (max-width:847px){
  display: none;
}
`
export const PaginationContainer = styled.div`
display: flex;
justify-content: flex-end;

@media screen and (max-width: 1114px){
  justify-content: center;
}

`

export const ResponsivePagination = styled(Pagination)`
align-items: center;
box-sizing: border-box;
display: none;
justify-content: center;
margin: 0 auto;
margin-left: 115px;
margin-right: 120px;
margin-top: 16px;
margin-bottom: 88px;

@media screen and (max-width:847px){
  display: flex;
}

`



export const TextPagination = styled.p`
color: #333;
cursor: default;
font-size: 12px;
margin-right: 16px;

span{
  font-weight: 500;
}
`
export const Arrows = styled.div`
display: flex;
`
export const Arrow = styled(IconContainer)`
  margin-right: 8px;
  cursor: ${props => (props.pages == 1 && props.side == "left") || (props.pages == 42 && props.side == "right") ? "default" : "pointer"};
`
export const LeftArrowPage = styled.img`
`
export const RightArrowPage = styled.img`
transform: rotate(180deg);
`


