import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color : transparent; // mobile click
  }
  body {
    font-family: "NotoSansKR", sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
