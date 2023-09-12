import React, { useEffect, useState } from 'react';
import Full from '../images/full_high.png';
import { LandingContainer, LandingImageContainer, TitleContainer, Title } from '../styles/LandingStyles';

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
  
  // Zoom Options
  const initialBgSize = 250;
  const lowPercentageThreshold = 20;
  const highPercentageThreshold = 60;
  const minBgSize = 100;

  const [minHeight, setMinHeight] = useState<number | null>(null);
  const [minWidth, setMinWidth] = useState<number | null>(null);
  
  const [bgSize, setBgSize] = useState(`${initialBgSize}%`);
  const [bgPosY, setBgPosY] = useState('100%');
  


  /**
   * Handles the scroll event and updates the background size and position based on the scroll percentage.
   */
  const handleScroll = () => {
    // Calculate Scroll Height and Scroll Percentage
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;
  
    // Helper function to adjust background size
    const adjustBgSize = (percentage:number) => {
      let newSize;
      if (percentage < lowPercentageThreshold) {
        newSize = initialBgSize - (percentage / lowPercentageThreshold) * (initialBgSize - minBgSize);
        return Math.max(newSize, minBgSize);
      } else if (percentage >= lowPercentageThreshold && percentage < highPercentageThreshold) {
        return minBgSize;
      } else {
        newSize = minBgSize + ((percentage - highPercentageThreshold) / (100 - highPercentageThreshold)) * (initialBgSize - minBgSize);
        return Math.min(newSize, initialBgSize);
      }
    };
  
    // Helper function to adjust background position Y
    const adjustBgPosY = (percentage:number) => {
      const newY = 100 - (percentage / 100) * 100;
      return Math.max(newY, 0);
    };
  
    // Set background size and position
    setBgSize(`${adjustBgSize(scrollPercentage)}%`);
    setBgPosY(`${adjustBgPosY(scrollPercentage)}%`);
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
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [bgSize, minHeight, minWidth]);
  
  
  

  return (
    <LandingContainer>
      <LandingImageContainer image={Full} style={{ backgroundSize: bgSize, backgroundPositionY: bgPosY }} />
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