import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ContentBoxProps {
  image?: IGatsbyImageData;
  imageposition?: string;
  children?: React.ReactNode;
  justifycontent?: string;
  altImage?: string;
}

const StyledContentBox = styled.div<ContentBoxProps>`
  position: relative;
  box-sizing: border-box;
  font: 1rem/1.5 'Gilroy', sans-serif;
  text-align: justify;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifycontent ?? 'center'};

  @media (min-width: 48rem) {
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

const ContentBox: React.FC<ContentBoxProps> = ({ image, children, altImage = '', justifycontent }) => {
  return (
    <StyledContentBox justifycontent={justifycontent} >
      {image && <GatsbyImage image={image} alt={altImage} />}
      {children}
    </StyledContentBox>
  );
};


export default ContentBox;
