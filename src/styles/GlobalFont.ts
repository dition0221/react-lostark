import { createGlobalStyle } from "styled-components";
// Fonts
import NotoSansKRThin from "./fonts/NotoSansKR-Thin.woff";
import NotoSansKRExtraLight from "./fonts/NotoSansKR-ExtraLight.woff";
import NotoSansKRLight from "./fonts/NotoSansKR-Light.woff";
import NotoSansKRRegular from "./fonts/NotoSansKR-Regular.woff";
import NotoSansKRMedium from "./fonts/NotoSansKR-Medium.woff";
import NotoSansKRSemiBold from "./fonts/NotoSansKR-SemiBold.woff";
import NotoSansKRBold from "./fonts/NotoSansKR-Bold.woff";
import NotoSansKRExtraBold from "./fonts/NotoSansKR-ExtraBold.woff";
import NotoSansKRBlack from "./fonts/NotoSansKR-Black.woff";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRThin}), format("woff");
    font-weight: 100;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRExtraLight}), format("woff");
    font-weight: 200;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRLight}), format("woff");
    font-weight: 300;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRRegular}), format("woff");
    font-weight: 400;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRMedium}), format("woff");
    font-weight: 500;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRSemiBold}), format("woff");
    font-weight: 600;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRBold}), format("woff");
    font-weight: 700;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRExtraBold}), format("woff");
    font-weight: 800;
  }  
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKRBlack}), format("woff");
    font-weight: 900;
  }
`;

export default GlobalFont;
