import { createGlobalStyle } from 'styled-components';
import GilroyFont from '../fonts/Gilroy-ExtraBold.otf';  // Adjust path as necessary

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyFont}) format('opentype');  // 'opentype' for .otf files
    font-weight: 300;
    font-style: normal;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`
export default GlobalStyle;