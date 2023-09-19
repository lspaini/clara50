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
  font-family: 'Gilroy', sans-serif;
  font-size: 1.25rem;
  line-height: 1.25;
  text-align: left;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifycontent ?? 'center'};
  & > h2 {
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 5px;
  }
  
  /* @media (min-width: 48rem) {
    text-align: justify;
    line-height: 1.5;
    margin-bottom: 4rem;

    & > h2 {
    line-height: 1.5;
    font-size: 2rem;
    margin-bottom: 5px;
  }
  }

  .gatsbyImageWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; // to place the image behind the content
  } */
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
