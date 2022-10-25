import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    color: ${props => props.theme["base-text"]};
  }
`