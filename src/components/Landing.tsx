import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import Street from '../images/street.png';
import Middle from '../images/middle.png';
import Sky from '../images/sky.png';
import { useState, useEffect } from 'react';

const LandingContainer = styled.div`
  height: 1000vh;
  width: 100%;
  z-index: -1;
`;

/**
 * Container for the landing page image.
 */
const LandingImageContainer = styled(motion.div)`
  position: fixed;
  top: -10%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center; // Centers the child vertically
  justify-content: center; // Centers the child horizontally
  /* scale: 0.5; */
  @media (min-width: 48rem) { // 768px
    /* top: -300px; */
    /* scale: 1.5; */
    right: 0;
  }
  @media (min-width: 64rem) { // 1024px
  }
  @media (min-width: 90rem) { // 1440px
  }
  @media (min-width: 120rem) { // 1920px
  }
  @media (min-width: 160rem) { // 2560px
  }
  @media (min-width: 240rem) { // 3840px
    /* top: -62.5rem; // -1000px */
    /* scale: 3; */
  }
  @media (min-width: 320rem) { // 5120px
  }
`;

const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1<{ bottom: number}>`
  position: absolute;
  bottom: ${(props) => props.bottom}px;
  margin-bottom: 2rem;
  color: #fff;
  padding: 4rem;
  font-size: 3rem;
  box-sizing: border-box;
  border: 1px solid white;
  font-family: 'Gilroy', sans-serif;
  font-weight: 200;
  min-width: 400px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;  
  border: 1px solid #fff;
  backdrop-filter: blur(6px);
`;

const ScrollPrompt = styled.p`
color: #fff;
`

const ImageGrid = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 100%;
height: 100%;
`;

const Image = styled.img`
/* max-inline-size: 100%; */
/* block-size: auto; */
/* aspect-ratio: 2/1; */
/* object-fit: cover; */
width: 100%;
`;

interface ContentBoxProps {
  image: string;
}

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowHeight;
}

export default function Landing({ image }: ContentBoxProps) {
  const windowHeight = useWindowHeight();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4, 0.5], [2, 1, 1, 1, 3]); 
  const translateY = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4, 0.5], [windowHeight * -2.2, windowHeight * -0.7, windowHeight * -0.4, windowHeight *0.2, windowHeight * 2]);

  return (
    <LandingContainer>
      <LandingImageContainer
        className="container"
        style={{
          scale,
          translateY, // Apply translateY transformation
        }}
      >
                  <ImageGrid>
        <Image src={Sky} alt="clarastrasse" />
        <Image 
          src={Middle} 
          alt="clarastrasse" 
          loading="lazy"
        
        />
        <Image src={Street} alt="clarastrasse" />
    </ImageGrid>
            </LandingImageContainer>
            <TitleContainer>
              <Title bottom={0}>Clarastrasse 50</Title>
              <ScrollPrompt>Scroll down</ScrollPrompt>
              <Title bottom={-2500} >Gastro</Title>
              <Title bottom={-3800} >Coworking</Title>
              <Title bottom={-5000}>13 Wohnungen</Title>
              </TitleContainer>
            </LandingContainer>
          );
        }
