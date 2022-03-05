import { createGlobalStyle } from "styled-components";
import img from "../assets/images/Background.svg";
export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
}
body{
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  background-attachment: fixed;
}

`