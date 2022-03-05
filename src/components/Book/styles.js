import styled from "styled-components/macro";

export const BookBlock = styled.div`
background: #FFFFFF;
box-sizing: border-box;
box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
border-radius: 4px;
cursor: pointer;
display: flex;
height: 160px;
width: 272px;
`
export const BookBlockContainer = styled.div`
  display: flex;
  margin-left: 16px;
`
export const BookBlockImg = styled.img`
height: 130px;
margin-top: 19px;
margin-bottom: 19px;
width: 81px;
filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`
export const BookBlockTextContainer = styled.div`
margin-top: 16px;
margin-left: 16px;

`
export const BookTitle = styled.h2`
color: #333;
font-size: 14px;
font-weight: 500;
`

export const BookAuthor = styled.p`
font-family: Heebo;
font-weight: 400;
font-size: 12px;
color: #AB2680;
`


export const InformationContainer = styled.div`
margin-top: 18px;
margin-bottom: 19px;
`

export const Information = styled.p`
font-family: Heebo;
font-size: 12px;
line-height:20px;
color: #999999;
`