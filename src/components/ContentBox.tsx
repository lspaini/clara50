import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

interface ContentBoxProps {
  src?: string; // Optional image URL
  imageposition?: string;
  children?: React.ReactNode; // Optional children (e.g., text)
  justifycontent?: string;
}

const StyledContentBox = styled.div<ContentBoxProps>`
  position: relative;
  box-sizing: border-box;
  font: 1rem/1.5 'Gilroy', sans-serif;
  text-align: justify;
  margin-bottom: 4rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifycontent ? props.justifycontent : 'center'};
  padding: 1rem;

  @media (min-width: 48rem) {
    padding: 0;
    width: 40vw;
    font-size: calc(0.1vw + 1rem);
  }

  .gatsbyImageWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; // to place the image behind the content
  }
`;

const ContentBox: React.FC<ContentBoxProps> = ({ src, children, imageposition = 'center', justifycontent }) => {
  return (
    <StyledContentBox justifycontent={justifycontent}>
      {src && 
        <StaticImage 
          src={src} 
          alt="" 
          layout="fullWidth"
          objectFit="cover"
          objectPosition={imageposition}
        />
      }
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;
