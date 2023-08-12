import { createGlobalStyle } from 'styled-components';
import GilroyFontExtraBold from '../fonts/Gilroy-ExtraBold.otf';  // Adjust path as necessary
import GilroyFontLight from '../fonts/Gilroy-Light.otf';  // Adjust path as necessary

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyFontExtraBold}) format('opentype');  // 'opentype' for .otf files
    font-weight: 800;  // Extra bold
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyFontLight}) format('opentype');  // 'opentype' for .otf files
    font-weight: 300;  // Light
    font-style: normal;
  }
  html, body, #root {
    background: #000;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display:grid;
    align-items: center;
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`
export default GlobalStyle;
