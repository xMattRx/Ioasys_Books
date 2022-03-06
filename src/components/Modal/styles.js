import styled from "styled-components/macro";

export const ContainerModal = styled.div`
height: 609px;
width: 769px;
border-radius: 4px;
position: absolute;
background-color: #FFFFFF;
z-index: 99;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
overflow-y: scroll;
 top: 4%;
/*left: 21%; */

@media screen and (max-width:911px){
  top:8%;
  width: 288px;
  height: 88%;
}

`
export const Background = styled.div`
background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(2px);
position: fixed;
z-index: 98;
width: 100%;
height: 100%;
top: 0px;
left: 0px;

`
export const X = styled.div`
background-color: #fff;
cursor: pointer;
position: fixed;
right: 20px;
top: 20px;
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

@media screen and (max-width:911px){
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 250px;
  right: 0;
 top: 1.5%;
}


`


export const ImageModal = styled.img`
filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
margin-left: 48px;
margin-top: 48px;

@media screen and (max-width:911px){
  width:240px;
  margin-left: 34px;
  margin-top: 24px;
  margin-bottom: 24px;
}


`

export const ContainerInternalModal = styled.div`
display: flex;

@media screen and (max-width:911px){
  overflow-y: scroll ;
  flex-direction: column;
  height:100%;
}


`
export const ContainerText = styled.div`
margin-top: 48px;
margin-left: 48px;
/* margin-right: 48px; */
margin-bottom: 32px;
cursor: default;
@media screen and (max-width:911px){
margin-top:0px;
margin-top: 32px;
margin-left: 24px;
}


`
export const InformationsContainer = styled.div`
align-items: flex-end;
display: flex;
justify-content: space-between;
`
export const Informations = styled.div`
align-items: flex-start;
display: flex;
flex-direction: column;
line-height: 20px;
font-weight: 500;
margin-top: 32px;

font-size: 12px;
width:175px;
span{
  line-height: 28px;
  text-transform: uppercase;
}
`
export const Information = styled.div`
margin-top: 8px;
margin-right: 48px;
`
export const DataContainer = styled.div`
display: flex;
flex-direction: column;
`
export const Data = styled.div`
color: #999;
font-size: 12px;
line-height: 20px;
margin-bottom:4.5px;
/* white-space: nowrap; 
width: 180px; 
overflow: hidden;
text-overflow: ellipsis;  */

&:last-child{
  margin-bottom: 0;
}

`
export const Title = styled.h1`
display: block;
font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 40px;
color: #333333;
`
export const Author = styled.span`
font-family: Heebo;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
color: #AB2680;
`
export const ContainerReview = styled.div`
width: 276px;
height: 170px;
margin-top: 24px;

`
export const TitleReview = styled.div`
font-family: Heebo;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
text-transform: uppercase;
color: #333333;
margin-bottom: 10px;
`
export const Description = styled.div`
box-sizing: border-box;
color: #999;
font-size: 12px;
overflow-y: auto;
height: 140px;
scrollbar-width: auto;
scrollbar-color: #ab268a #ffffff;
text-align: justify;
img{
  padding-top: 1px;
}

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
    margin-left: 400px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ab268a;
    border-radius: 28px;
    border: 3px solid #ffffff;
  }
`