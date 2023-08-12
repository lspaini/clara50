import React, { useRef, useState, useEffect } from 'react';
// import RenderClarastrasse from '../images/render_clarastrasse.jpg';
import RenderClarastrasse from '../images/roof1.png';
import { styled } from 'styled-components';

interface ImageAreaProps {
  leftOffset?: string;
  topOffset?: string;
}


const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  position: relative;
  &::before {
        content: '';
        position: absolute;
        background-image: url(${RenderClarastrasse});
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-position: left bottom;
        z-index: 1;
        filter: grayscale(100%);
    }
`;


 const LandingGrid = styled.div`
    display: grid;
    grid-template-areas: 
        "HeaderArea"
        "ImageArea"
        "NavigationArea"
        "FooterArea";
    grid-template-columns: 1fr;
    height: 100%;
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
        height: 80vh;
        width: 70vw;
        gap: 1rem;
    }
`;

const BaseArea = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  color: #fff;
  border: 3px solid #fff;
  background: #000;
`;

const HeaderArea = styled(BaseArea)`
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

const NavigationArea = styled(BaseArea)`
  grid-area: NavigationArea;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 15rem;
  @media (min-width: 48rem) {
   height: 100%; 
  }
`;


const ImageArea = styled(BaseArea)<ImageAreaProps>`
grid-area: ImageArea;
  position: relative; 
  overflow: hidden;  
  height: 100%;
  &::before {
        content: '';
        position: absolute;
        background-image: url(${RenderClarastrasse});
        background-size: cover;
        top: ${props => props.leftOffset ? `-${props.leftOffset}px` : '-100%'};
        left: ${props => props.leftOffset ? `-${props.leftOffset}px` : '-100%'};
        right: 0;
        bottom: 0;
        z-index: 1;
    }

  @media (min-width: 48rem) {
    height: 100%;
  }
`;

const FooterArea = styled(BaseArea)`
  grid-area: FooterArea;
  font-family: 'Gilroy', sans-serif;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  font-size: calc(1.25rem + (2 - 1) * ((100vw - 300px) / (1600 - 300)));
  height: 5rem;
  position: relative;

  @media (min-width: 48rem) {
    height: 100%;
  }
`;

const Title = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 0.625rem;
`;

const TitleLetter = styled.div`
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

const NavLink = styled.a`
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

export default function Hero() {
  const imageAreaRef = useRef(null);
  const [distanceToLeft, setDistanceToLeft] = useState(0);
  const [distanceToTop, setDistanceToTop] = useState(0);

  useEffect(() => {
      function updateDistances() {
          if (imageAreaRef.current) {
              const rect = imageAreaRef.current.getBoundingClientRect();
              setDistanceToLeft(rect.left);
              setDistanceToTop(rect.top);
          }
      }

      // Initial calculation
      updateDistances();

      // Set up the event listener
      window.addEventListener('resize', updateDistances);

      // Clean up the event listener on unmount
      return () => {
          window.removeEventListener('resize', updateDistances);
      };
  }, []);


    return (<>
        <LandingContainer>
            <LandingGrid>
                <HeaderArea>
                    <Title>
                        {"Clara".split('').map((letter, index) => <TitleLetter key={index}>{letter}</TitleLetter>)}
                    </Title>
                    <Title>
                        {"Strasse".split('').map((letter, index) => <TitleLetter key={index}>{letter}</TitleLetter>)}
                    </Title>
                    <Title>
                        {"50".split('').map((letter, index) => <TitleLetter key={index}>{letter}</TitleLetter>)}
                    </Title>
                </HeaderArea>
                <NavigationArea>
                    <NavLink href="#projekt">Projekt</NavLink>
                    <NavLink href="#architektur">Architektur</NavLink>
                    <NavLink href="#ueberuns">Über uns</NavLink>
                    <NavLink href="#partner">Partner</NavLink>
                    <NavLink href="#konakt">Kontakt</NavLink>
                </NavigationArea>
                <ImageArea ref={imageAreaRef} leftOffset={distanceToLeft} topOffset={distanceToTop} />
                
                <FooterArea>Coming 2025</FooterArea>
            </LandingGrid>
        </LandingContainer>
        </>
    );
}
