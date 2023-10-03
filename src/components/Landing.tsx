import React, { useEffect, useState } from 'react';
import Full from '../images/full.png';
import { LandingContainer, LandingImageContainer, TitleContainer, Title, TextBox, MainTitle, MainTitleContainer, TextContainer } from '../styles/LandingStyles';

const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Returns the aspect ratio of the image.
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
// window.addEventListener('resize', () => {
//   const aspectRatio = window.innerWidth / window.innerHeight;
//   if (isDevelopment) console.log("Viewport AR: ", aspectRatio);
// });

// get aspect ratio of the viewport (window), even when resized, and put it in the console.
// window.addEventListener('scroll', () => {
//   const aspectRatio = window.innerWidth / window.innerHeight;
//   if (isDevelopment) console.log("Viewport AR: ", aspectRatio);
// });



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
    if (isDevelopment) console.log("percentage is less than the start boundary");
    newSize = initialImageSize - (percentage / startResizeScrollPercent) * (initialImageSize - minImageSize);
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
          <MainTitleContainer>
            <MainTitle bottom={0}>Clarastrasse 50</MainTitle>
          </MainTitleContainer>
          <TextContainer>
          <TitleContainer>
            <Title bottom={0} >Innovative Gastronomie</Title>
            <TextBox><p>In enger Zusammenarbeit mit Talenten aus der Basler Gastroszene wollen wir diesen Teil der Clarastrasse in einen lebendigen Treffpunkt verwandeln. Wir werden fortlaufend experimentieren, um einen Ort zu schaffen, der zum Verweilen einlädt.</p></TextBox>
          </TitleContainer>
          <TitleContainer>
            <Title bottom={-3800} >Moderner Co-Working Space</Title>
            <TextBox><p>Für alle, die das Konzept "alleine, doch gemeinsam" beim Arbeiten schätzen, bieten wir Arbeitstische in unserem Co-Working-Space an. Diesen Raum gestalten wir in enger Zusammenarbeit mit den zukünftigen Nutzenden, um eine Arbeitsumgebung aufzubauen, die Produktivität und Gemeinschaft fördert.
</p></TextBox>
          </TitleContainer>
          <TitleContainer>
            <Title bottom={-5000}>Mehr Wohnungen</Title>
            <TextBox><p>Wir erweitern den Wohnraum (+118%) und erhöhen die Zahl der Wohnungen von vier auf 13 in verschiedenen Grössen. Mit offenen Grundrissen, grosszügigem Stauraum und modernster Haustechnik schaffen wir ein komfortables Ambiente für die Bewohner:innen.</p></TextBox>
          </TitleContainer>
          </TextContainer>
      </LandingContainer>
  );
};

export default Landing;