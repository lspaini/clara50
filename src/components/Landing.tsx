import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components'; 

export const LandingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const LandingImage = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

interface ContentBoxProps {
    image: IGatsbyImageData;
  }


export default function Landing({ image }: ContentBoxProps) {

  return (
    <LandingContainer>
      <LandingImage image={image} alt="Clarastrasse" />
    </LandingContainer>
  );
}
