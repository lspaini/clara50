import React, { useEffect, useState } from 'react';
import Full from '../images/full_high.png';
import { LandingContainer, LandingImageContainer, TitleContainer, Title } from '../styles/LandingStyles';

const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Returns the aspect ratio of an image given its source URL.
 */
const getImageAspectRatio = (src: string): Promise<number> => {
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

// get aspect ratio of the viewport (window), even when resized, and put it in the console.
window.addEventListener('resize', () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  if (isDevelopment) console.log("Viewport AR: ", aspectRatio);
});
// get aspect ratio of the viewport (window), even when resized, and put it in the console.
window.addEventListener('scroll', () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  if (isDevelopment) console.log("Viewport AR: ", aspectRatio);
});



const Landing: React.FC = () => {
  
  // Initial background size (in %) when the page loads
  const initialImageSize = 250;

   // Define boundaries for zooming (in %) and shrinking the image
   const startResizeScrollPercent = 20;
   const endResizeScrollPercent = 60;

  const [minHeight, setMinHeight] = useState<number | null>(null);
  const [minWidth, setMinWidth] = useState<number | null>(null);
  
  const [imageSize, setImageSize] = useState(`${initialImageSize}%`);
  const [imagePosY, setImagePosY] = useState('100%');

  const [minImageSize, setMinImageSize] = useState(100);
  

const adjustImageSize = (percentage: number): number => {

  let newSize;

  // If the scroll percentage is less than the start boundary, gradually zoom out the image
  if (percentage < startResizeScrollPercent) {
    newSize = initialImageSize - (percentage / startResizeScrollPercent) * (initialImageSize - minImageSize);
    if (isDevelopment) console.log("percentage is less than the start boundary");
    return Math.max(newSize, minImageSize);
  } 

  // If the scroll percentage is between the start and end boundaries, keep the image at its smallest size
  else if (percentage >= startResizeScrollPercent && percentage < endResizeScrollPercent) {
    if (isDevelopment) console.log("percentage is between the start and end boundaries")
    return minImageSize;
  } 

  // If the scroll percentage is greater than the end boundary, gradually zoom in the image
  else {
    newSize = minImageSize + ((percentage - endResizeScrollPercent) / (100 - endResizeScrollPercent)) * (initialImageSize - minImageSize);
    if (isDevelopment) console.log("percentage is greater than the end boundary");
    return Math.min(newSize, initialImageSize);
  }
};

  
/**
 * Adjusts the background Y-position based on the scroll percentage.
 */
const adjustImagePosY = (percentage: number): number => {
  // Calculate new Y-position as a percentage
  // It starts from 100% (fully visible) and goes down to 0% (aligned with the top of the viewport)
  const newYPosition = 100 - (percentage / 100) * 100;
  // console.log("newYPosition: ", newYPosition);
  // Ensure that the new Y-position does not go below 0%
  return Math.max(newYPosition, 0);
};

  /**
   * Handles the scroll event and updates the background size and position based on the scroll percentage.
   */
  const handleScroll = () => {

    // Calculate Scroll Height and Scroll Percentage
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;
  
    // Set background size and position
    setImageSize(`${adjustImageSize(scrollPercentage)}%`);
    setImagePosY(`${adjustImagePosY(scrollPercentage)}%`);

    if (isDevelopment) console.log("Updated imageSize: ", imageSize); // Log the updated size
  };

  useEffect(() => {
    const init = async () => {
      try {
        // Check if running in a browser environment
        if (typeof window !== 'undefined') {
          
          // Event listeners for 'resize' and 'scroll'
          window.addEventListener('resize', handleScroll);
          window.addEventListener('scroll', handleScroll);
  
          // Get the aspect ratio of the window
          const aspectRatioWindow = window.innerWidth / window.innerHeight;
    
          // Set initial dimensions
          setMinHeight(window.innerHeight);
          setMinWidth(window.innerWidth);
    
          // Fetch the image's aspect ratio
          const aspectRatioImage = await getImageAspectRatio(Full);
    
          if (isDevelopment) console.log("Image AR: ", aspectRatioImage);
    
          // Calculate the minimum zoom level needed for the "cover" effect
          const minCoverSize = aspectRatioWindow > aspectRatioImage
            ? (window.innerHeight / window.innerWidth) * aspectRatioImage * 350
            : (window.innerWidth / window.innerHeight) / aspectRatioImage * 150;
  
            if (isDevelopment) console.log("minCoverSize: ", minCoverSize);
          
          // Update the state with the new minimum background size
          setMinImageSize(minCoverSize);
        }
      } catch (error) {
        // Log any errors encountered while fetching the image aspect ratio
        console.error("Error getting image: ", error);
      }
    };
  
    // Call the inner async function
    init();
  
    // Cleanup function
    return () => {
      
      // Only execute if window object exists
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    };
    
  }, [imageSize, minHeight, minWidth]);
  
  
  
  
  

  return (
    <LandingContainer>
      <LandingImageContainer image={Full} style={{ backgroundSize: imageSize, backgroundPositionY: imagePosY }} />
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