import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

interface ImageAreaProps {
    distanceToLeft: number;
    distanceToTop: number;
  }

  
  export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 1rem;
  @media (min-width: 48rem) {
    align-items: center;
  }
  `;

  export const HeroBackground = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
`;

export const HeroGrid = styled.div`
    display: grid;
    grid-template-areas: 
        "HeaderArea"
        "ImageArea"
        "NavigationArea"
        "FooterArea";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 0.5fr;
    height: 100%;
    width: 100%;
    gap: 0.3125rem;
    box-sizing: border-box;
    position: relative;
    z-index: 3;

    
    @media (min-width: 48rem) { 
        grid-template-areas: 
            "HeaderArea HeaderArea ImageArea ImageArea"
            "HeaderArea HeaderArea ImageArea ImageArea"
            "HeaderArea HeaderArea ImageArea ImageArea"
            "NavigationArea NavigationArea ImageArea ImageArea"
            "NavigationArea NavigationArea ImageArea ImageArea"
            "NavigationArea NavigationArea FooterArea FooterArea";
        grid-template-columns: 2fr 2fr 1.5fr 1.5fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        height: 80vh;
        width: 70%;
        gap: 1rem;
    }
`;

export const BaseArea = styled.div`
  box-sizing: border-box;
  padding: 1.25rem;
  color: #fff;
  border: 0.3125rem solid #000;
  background: #000;
`;

export const HeaderArea = styled(BaseArea)`
  grid-area: HeaderArea;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-transform: uppercase;
  height: 12rem;
  @media (min-width: 48rem) {
   height: 100%; 
  }
`;

export const NavigationArea = styled(BaseArea)`
  grid-area: NavigationArea;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
`;


export const ImageArea = styled(BaseArea)`
  grid-area: ImageArea;
  position: relative; 
  overflow: hidden;
  background: none;

  @media (min-width: 48rem) {
    height: 100%;
  }
`;


export const ImageAreaBackground = styled(GatsbyImage)<ImageAreaProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  @media (min-width: 48rem) {
    left: calc(-${props => props.distanceToLeft}px - 0.78rem) ; /* no idea what 0.78rem could be */
    top: calc(-${props => props.distanceToTop}px - 0.3125rem) ; /* border pixel size */
  width: 100vw;
  height: 100vh;
 }
  `

export const FooterArea = styled(BaseArea)`
  grid-area: FooterArea;
  font-family: 'Gilroy', sans-serif;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
  position: relative;
  font-size: calc(1rem + 0.5 * ((100vw - 20rem) / (64.5 - 20)));
  
  `;

export const Title = styled.h1`
display: flex;
justify-content: flex-start;
margin-bottom: 0.625rem;
`;

export const TitleLetter = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(2rem + 1 * ((100vw - 20rem) / (64.5 - 20)));
width: calc(2rem + 1 * ((100vw - 20rem) / (64.5 - 20)));
height: calc(2rem + 1 * ((100vw - 20rem) / (64.5 - 20)));
font-family: 'Gilroy', sans-serif;
font-weight: 800;
`;

export const NavLink = styled.a`
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-family: 'Helvetica', sans-serif;
  font-size: calc(1rem + 0.5 * ((100vw - 20rem) / (64.5 - 20)));
  color: #fff;
  font-family: 'Gilroy', sans-serif;
  &:hover {
    color: #6A8A70;
  }
`;