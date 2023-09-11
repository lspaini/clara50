import styled from 'styled-components';
import Full from '../images/full.png';
import React, { useEffect, useState } from 'react';

const LandingContainer = styled.div`
  height: 470vh;
  width: 100%;
  z-index: -1;
`;

const TitleContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
margin-bottom: 12vh;
z-index: 1;
`
const Title = styled.h1<{ bottom: number}>`
  bottom: ${(props) => props.bottom}px;
  color: #fff;
  padding: 10%;
  box-sizing: border-box;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;  
  border: 1px solid #fff;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  letter-spacing: 0.1rem;
  flex-direction: column;
  @media (min-width: 375px) {
    font-size: 2rem;
  }
  @media (min-width: 576px) {
    min-width: 10rem;
    min-height: 3.125rem;
    font-size: 3rem;
    padding: 4rem 5.5rem;
  }
`;



const LandingImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${Full});
  background-repeat: no-repeat;
  background-position-x: center;
  box-sizing: border-box;
`;


/**
 * Returns the aspect ratio of an image given its source URL.
 * @param src - The source URL of the image.
 * @returns A promise that resolves with the aspect ratio of the image.
 */
const getImageAspectRatio = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      resolve(aspectRatio);
    };
    img.onerror = reject;
  });
};


/**
 * Landing component that displays a background image that adjusts its size and position based on scrolling and window dimensions.
 * @returns React functional component
 */
const Landing: React.FC = () => {
  const initialBgSize = 300;
  const [minHeight, setMinHeight] = useState<number | null>(null);
  const [minWidth, setMinWidth] = useState<number | null>(null);

  const [bgSize, setBgSize] = useState(`${initialBgSize}%`);
  const [bgPosY, setBgPosY] = useState('100%');
  const [shouldCover, setShouldCover] = useState(false);

  

  /**
   * Logs the dimensions and aspect ratio of the background image and the LandingImageContainer.
   * @returns void
   */
  const logDimensionsAndAspectRatio = () => {
    // Log background image dimensions and aspect ratio
    const newBgSize = parseFloat(bgSize);
    const newWidth = minWidth ? (minWidth * (newBgSize / 100)) : 0;
    const newHeight = minHeight ? (minHeight * (newBgSize / 100)) : 0;
    const imageAspectRatio = newWidth / newHeight;
    console.log(`New background image dimensions: Width = ${newWidth}px, Height = ${newHeight}px, Aspect Ratio = ${imageAspectRatio}`);

    // Log LandingImageContainer dimensions and aspect ratio
    const containerAspectRatio = (minWidth && minHeight) ? (minWidth / minHeight) : 1;

    console.log(`LandingImageContainer dimensions: Width = ${minWidth}px, Height = ${minHeight}px, Aspect Ratio = ${containerAspectRatio}`);
  };


  /**
   * Handles the resize event of the window and updates the state variables accordingly.
   * Also calculates the container aspect ratio and sets the `shouldCover` state variable
   * based on whether the aspect ratio is less than 0.5496 or not.
   */
  const handleResize = () => {
    setMinHeight(window.innerHeight);
    setMinWidth(window.innerWidth);

    // Calculate container aspect ratio
    const containerAspectRatio = (minWidth && minHeight) ? (minWidth / minHeight) : 1;

    if (containerAspectRatio < 0.5496) {
      setShouldCover(true);
    } else {
      setShouldCover(false);
    }

    // logDimensionsAndAspectRatio();
  };

  /**
   * Handles the scroll event and updates the background size and position based on the scroll percentage.
   * @returns void
   */
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;

    if (!shouldCover) {
      if (scrollPercentage < 20) {
        const newSize = initialBgSize - (scrollPercentage / 20) * (initialBgSize - 100);
        setBgSize(`${Math.max(newSize, 100)}%`);
      } else if (scrollPercentage >= 20 && scrollPercentage < 60) {
        setBgSize('100%');
      } else {
        const newSize = 100 + ((scrollPercentage - 60) / 20) * (initialBgSize - 100);
        setBgSize(`${Math.min(newSize, initialBgSize)}%`);
      }

      const newY = 100 - (scrollPercentage / 100) * 100;
      setBgPosY(`${Math.max(newY, 0)}%`);
    }

    // logDimensionsAndAspectRatio();
  };

  useEffect(() => {
    // Check if running in browser environment
    if (typeof window !== 'undefined') {
      // Set initial dimensions
      setMinHeight(window.innerHeight);
      setMinWidth(window.innerWidth);
  
      // Fetch and handle image aspect ratio
      getImageAspectRatio(Full)
        .then((aspectRatio) => {
          console.log("Image Aspect Ratio: ", aspectRatio);
        })
        .catch((error) => {
          console.error("Error getting image: ", error);
        });
  
      // Your existing event listeners
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [bgSize, shouldCover, minHeight, minWidth]);

  useEffect(() => {
    
    // Logic to adjust bgSize based on scrolling (if needed)
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;
  
    if (scrollPercentage < 20) {
      const newSize = initialBgSize - (scrollPercentage / 20) * (initialBgSize - 100);
      setBgSize(`${Math.max(newSize, 100)}%`);
    } else if (scrollPercentage >= 20 && scrollPercentage < 60) {
      setBgSize('100%');
    } else {
      const newSize = 100 + ((scrollPercentage - 60) / 40) * (initialBgSize - 100);
      setBgSize(`${Math.min(newSize, initialBgSize)}%`);
    }
  
    const newY = 100 - (scrollPercentage / 100) * 100;
    setBgPosY(`${Math.max(newY, 0)}%`);
  }, [bgSize, initialBgSize]);
  

  return (
    <LandingContainer>
      <LandingImageContainer style={{ backgroundSize: bgSize, backgroundPositionY: bgPosY }} />
          <TitleContainer>
            <Title bottom={0}>Clarastrasse 50</Title>
          </TitleContainer>
          <TitleContainer>
            <Title bottom={-2500} >Gastro</Title>
          </TitleContainer>
          <TitleContainer>
            <Title bottom={-3800} >Coworking</Title>
          </TitleContainer>
          <TitleContainer>
            <Title bottom={-5000}>Wohnungen</Title>
          </TitleContainer>
      </LandingContainer>
  );
};

export default Landing;