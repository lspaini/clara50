import React, { useRef, useState, useEffect } from 'react';
import { FooterArea, HeaderArea, ImageArea, HeroContainer, HeroGrid, NavLink, NavigationArea, Title, TitleLetter, HeroBackground, ImageAreaBackground } from '../styles/heroStyle';
import { graphql, useStaticQuery } from 'gatsby';

export default function Hero() {

  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "roof1.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`);

  const imageAreaRef = useRef<HTMLDivElement | null>(null);
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
  
    setTimeout(updateDistances, 0); // Delay the initial calculation
  
    window.addEventListener('resize', updateDistances);
  
    return () => {
      window.removeEventListener('resize', updateDistances);
    };
  }, []);

      console.log(distanceToLeft, distanceToTop);

      return (
        <>
          <HeroContainer>
          <HeroBackground image={data.file.childImageSharp.gatsbyImageData} alt="Clarastrasse" />
            <HeroGrid>
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
              </NavigationArea>
              <ImageArea ref={imageAreaRef}>
                <ImageAreaBackground distanceToLeft={distanceToLeft} distanceToTop={distanceToTop} image={data.file.childImageSharp.gatsbyImageData} alt="Clarastrasse" />
                </ImageArea>
                
                <FooterArea>Coming 2025</FooterArea>
            </HeroGrid>
        </HeroContainer>
        </>
    );
}
