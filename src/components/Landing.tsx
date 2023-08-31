import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import Street from '../images/street.png';
import Middle from '../images/middle.png';
import Sky from '../images/sky.png';
import Full from '../images/full.png';
import React, { useEffect, useState, useRef, RefObject } from 'react';

const LandingContainer = styled.div`
  height: 550vh;
  width: 100%;
  z-index: -1;
`;


const LandingImageContainer = styled(motion.div)`
    position: fixed;
    bottom: 0;
    /* width: 100%; */
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center; 
    @media (min-width: 576px) {
      transform-origin: bottom;

  }
`;

const ImageGrid = styled.div`
display: none;
@media (min-width: 576px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 100%;
  }
`;

const Image = styled.img`
width: 100%;
`;

const MobileImage = styled.img`
width: 100%;
@media (min-width: 576px) {
 display: none;
  }
`

const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
margin-bottom: 20rem;
`
const Title = styled.div<{ bottom: number}>`
  bottom: ${(props) => props.bottom}px;
  color: #fff;
  padding: 2rem;
  font-size: 3rem;
  box-sizing: border-box;
  border: 1px solid white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;  
  border: 1px solid #fff;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    min-width: 25rem; // 400px / 16px = 25rem
    min-height: 3.125rem; // 50px / 16px = 3.125rem
    font-size: 3rem;
    padding: 4rem;
  }
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ScrollPrompt = styled.p`
color: #fff;
font-size: 2rem;
`

type LandingProps = {
  image: string;
};

// Custom hook to get window width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

// Custom hook to get distance to bottom
const useDistanceToBottom = (imageRef: RefObject<HTMLImageElement>) => {
  const [distanceToBottom, setDistanceToBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const distance = window.innerHeight - imageRef.current.getBoundingClientRect().bottom;
        setDistanceToBottom(distance);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [imageRef]);

  return distanceToBottom;
};

// Custom hook to get distance to top
const useDistanceToTop = (imageRef: RefObject<HTMLImageElement>) => {
  const [distanceToTop, setDistanceToTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const distance = imageRef.current.getBoundingClientRect().top;
        setDistanceToTop(distance);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [imageRef]);

  return distanceToTop;
};


const setScaleAndTranslate = (windowWidth: number, distanceToBottom: number, distanceToTop: number) => {

  
  // Set default values
  let scaleValues = [3, 2, 2, 2, 2, 3];
  let translateYValues = [windowWidth * -1.4, windowWidth * -0.8, windowWidth * -0.6, windowWidth * -0.4, windowWidth * -0.2, windowWidth * 1.2];

  if (windowWidth >= 576) {
    scaleValues = [2, 1.5, 1.5, 1.5, 1.5, 2];
    translateYValues = [windowWidth * 0, windowWidth * 0.2, windowWidth * 0.6, windowWidth * 0.8, windowWidth * 1.3, windowWidth * 2.4];
  }

  return { scaleValues, translateYValues };
};


const Landing: React.FC<LandingProps> = ({ image }: LandingProps) => {
  const windowWidth = useWindowWidth();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const distanceToBottom = useDistanceToBottom(imageRef);
  const distanceToTop = useDistanceToTop(imageRef);
  const { scrollYProgress } = useScroll();

  const { scaleValues, translateYValues } = setScaleAndTranslate(windowWidth, distanceToBottom, distanceToTop);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.6, 0.7, 1], scaleValues);
  const translateY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.6, 0.7, 1], translateYValues);

  return (
    <LandingContainer>
      <LandingImageContainer className="container" style={{ scale, translateY }}>
        <MobileImage src={Full} alt="clarastrasse" />
        <ImageGrid ref={imageRef}>
          <Image src={Sky} alt="clarastrasse" />
          <Image src={Middle} alt="clarastrasse" loading="lazy" />
          <Image src={Street} alt="clarastrasse" />
        </ImageGrid>
      </LandingImageContainer>
    </LandingContainer>
  );
};

export default Landing;
