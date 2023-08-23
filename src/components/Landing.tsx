import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';

export const LandingContainer = styled.div`
  height: 1000vh;
  width: 100%;
  z-index: -1;
`;

export const LandingImageContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center; // Centers the child vertically
  justify-content: center; // Centers the child horizontally
`;

const AnimatedLandingImage = motion(GatsbyImage);

const StyledAnimatedLandingImage = styled(AnimatedLandingImage)``;

interface ContentBoxProps {
  image: IGatsbyImageData;
}

export default function Landing({ image }: ContentBoxProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [3, 1, 1, 2, 2]); // Starts zoomed out more
  const translateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-725, 0, 250, 250, 0]); // Starts further up, stop, move down, stop, move up

  return (
    <LandingContainer>
      <LandingImageContainer
        className="container"
        style={{
          scale,
          translateY, // Apply translateY transformation
        }}
      >
        <StyledAnimatedLandingImage image={image} alt="Clarastrasse" />
      </LandingImageContainer>
    </LandingContainer>
  );
}
