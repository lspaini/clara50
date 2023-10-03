import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { StyledContentBox } from '../styles/ContentBoxStyles';

interface ContentBoxProps {
  image?: IGatsbyImageData;
  imageposition?: string;
  children?: React.ReactNode;
  justifycontent?: string;
  altImage?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ image, children, altImage = '', justifycontent }) => {
  return (
    <StyledContentBox justifycontent={justifycontent} >
      {image && <GatsbyImage image={image} alt={altImage} />}
      {children}
    </StyledContentBox>
  );
};


export default ContentBox;
