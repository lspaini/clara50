import React from 'react';

import RenderClarastrasse from '../images/render_clarastrasse.jpg';
import { styled } from 'styled-components';


const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
    @media (min-width: 48rem) {
    padding: 5%;
    width: 80%;
  }
  @media (min-width: 1440px) {
    padding: 5%;
  }
`;


 const LandingGrid = styled.div`
    display: grid;
    grid-template-areas: 
        "HeaderArea"
        "ImageArea"
        "NavigationArea"
        "FooterArea";
    grid-template-columns: 1fr; // Single column for mobile view
    grid-template-rows: repeat(4, 1fr); 
    height: calc(90vh - 1.25rem);
    width: 90vw;
    gap: 0.3125rem;
    box-sizing: border-box;

    @media (min-width: 48rem) { // 768px replaced by 48rem
        grid-template-areas: 
            "HeaderArea HeaderArea ImageArea ImageArea"
            "HeaderArea HeaderArea ImageArea ImageArea"
            "HeaderArea HeaderArea ImageArea ImageArea"
            "NavigationArea NavigationArea ImageArea ImageArea"
            "NavigationArea NavigationArea ImageArea ImageArea"
            "NavigationArea NavigationArea FooterArea FooterArea";
        grid-template-columns: 2fr 2fr 1.5fr 1.5fr;
        grid-template-rows: repeat(6, 1fr);
        height: 100%;
        width: 100%;
        gap: 1.25rem;
    }
`;





const HeaderArea = styled.div`
  grid-area: HeaderArea;
  color: #000;
  background-color: #fff;
  border: 1px solid #000; /* black */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.625rem;
  text-transform: uppercase;
  box-sizing: border-box;
`;

 const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.625rem; // 10px replaced by 0.625rem
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



const NavigationArea = styled.div`
  grid-area: NavigationArea;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0.625rem;
  box-sizing: border-box;
  @media (min-width: 74.875rem) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.625rem;
  font-family: 'Helvetica', sans-serif;
  font-size: calc(1rem + (2 - 1) * ((100vw - 300px) / (1600 - 300)));
  &:hover {
    color: #666; /* dark gray */
  }
  @media (min-width: 74.875rem) {
    margin-right: 1.25rem;
  }
`;


 const ImageArea = styled.div`
    grid-area: ImageArea;
    background-image: url(${RenderClarastrasse});
    background-size: 200%; 
    background-position: center;
    box-sizing: border-box;
    border: 1px solid #000;
`;

const FooterArea = styled.div`
  grid-area: FooterArea;
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  font-family: 'Gilroy', sans-serif;
  font-weight: 200;
  font-size: calc(1.5rem + (1 - 2.5) * ((100vw - 300px) / (1600 - 300)));
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64.5rem) {
    font-size: calc(1rem + 1.5 * ((100vw - 20rem) / (64.5 - 20)));
  }
`;

export default function Hero() {
    return (
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
                    <NavLink href="#beschreibung">Beschreibung</NavLink>
                    <NavLink href="#architektur">Architektur</NavLink>
                    <NavLink href="#ueberuns">Über uns</NavLink>
                    <NavLink href="#partner">Partner</NavLink>
                    <NavLink href="#faq">FAQ</NavLink>
                    <NavLink href="#kontakt">Kontakt</NavLink>
                </NavigationArea>
                <ImageArea />
                <FooterArea>Coming 2025</FooterArea>
            </LandingGrid>
        </LandingContainer>
    );
}
