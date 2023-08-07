import React from 'react';
import styled from 'styled-components';

interface ContentBoxProps {
  backgroundImage?: string; // Optional image URL
  children?: React.ReactNode; // Optional children (e.g., text)
}

const StyledContentBox = styled.div<ContentBoxProps>`
background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'}; 
background-size: cover;
background-position: center;
background-color: ${props => props.backgroundImage ? 'transparent' : '#fff'}; // Conditionally set the background color
padding: 2rem;
border: 1px solid #000;
width: 100%;
`;

const ContentBox: React.FC<ContentBoxProps> = ({ backgroundImage, children }) => {
  return (
    <StyledContentBox backgroundImage={backgroundImage}>
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;