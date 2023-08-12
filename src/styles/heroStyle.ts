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
    grid-template-rows: 1fr 1fr 1fr 1fr;
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
    left: calc(-${props => props.distanceToLeft}px - 0.625rem) ;
    top: calc(-${props => props.distanceToTop}px - 0.3125rem) ;
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
  font-size: calc(1.25rem + (2 - 1) * ((100vw - 300px) / (1600 - 300)));
  height: 5rem;
  position: relative;

  @media (min-width: 48rem) {
    height: 100%;
    font-size: calc(1.5rem + (2 - 1) * ((100vw - 300px) / (1600 - 300)));
  }
  @media (min-width: 64.5rem) {
    height: 100%;
    font-size: calc(2rem + (2 - 1) * ((100vw - 300px) / (1600 - 300)));
  }
`;

export const Title = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 0.625rem;
`;

export const TitleLetter = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(2rem + 1.5 * ((100vw - 20rem) / (64.5 - 20))); // Scale for screens smaller than 64.5rem
width: calc(2rem + 1.5 * ((100vw - 20rem) / (64.5 - 20)));
height: calc(2rem + 1.5 * ((100vw - 20rem) / (64.5 - 20)));
font-family: 'Gilroy', sans-serif;
font-weight: 800;

@media (min-width: 64.5rem) { // Apply these styles for screens that are at least 64.5rem wide
    font-size: calc(3.5rem + (2 - 3.5) * ((100vw - 300px) / (1600 - 300)));
    width: 3.5rem;
    height: 3.5rem;
}
`;

export const NavLink = styled.a`
  text-decoration: none;
  margin-bottom: 0.625rem;
  font-family: 'Helvetica', sans-serif;
  font-size: calc(0.5vw + 1rem);
  color: #fff;
  font-family: 'Gilroy', sans-serif;
  &:hover {
    color: #6A8A70;
  }
  @media (min-width: 74.875rem) {
    margin-right: 1.25rem;
  }
`;