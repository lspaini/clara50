import React from 'react';
import { LandingContainer, LandingGrid, NavigationArea, HeaderArea, TitleLetter, NavLink, FooterArea, ImageArea, Title } from './hero.styles';

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
                    <NavLink href="#newsletter">Newsletter</NavLink>
                </NavigationArea>
                <ImageArea />
                <FooterArea>Coming 2025</FooterArea>
            </LandingGrid>
        </LandingContainer>
    );
}
