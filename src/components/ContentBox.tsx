import React from 'react';
import {styled} from 'styled-components';

interface ContentBoxProps {
  backgroundimage?: string; // Optional image URL
  children?: React.ReactNode; // Optional children (e.g., text)
}

const StyledContentBox = styled.div<ContentBoxProps>`
background-image: ${props => props.backgroundimage ? `url(${props.backgroundimage})` : 'none'}; 
background-size: cover;
background-position: center;
padding: 2rem;
border: 1px solid #000;
width: 100%;
font: 1rem/1.5 'Gilroy', sans-serif;
height: 50vh;
`;

const ContentBox: React.FC<ContentBoxProps> = ({ backgroundimage, children }) => {
  return (
    <StyledContentBox backgroundimage={backgroundimage}>
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;