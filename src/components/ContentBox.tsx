import React from 'react';
import {styled} from 'styled-components';

interface ContentBoxProps {
  backgroundimage?: string; // Optional image URL
  imageposition?: string;
  children?: React.ReactNode; // Optional children (e.g., text)
  justifyContent?: string;
}

const StyledContentBox = styled.div<ContentBoxProps>`
background-image: ${props => props.backgroundimage ? `url(${props.backgroundimage})` : 'none'}; 
background-size: cover;
background-position: ${props => props.imageposition ? `url(${props.imageposition})` : 'bottom'};
box-sizing: border-box;
width: 40vw;
font: 1rem/1.5 'Gilroy', sans-serif;
margin-bottom: 4rem;
min-height: 50vh;
text-align: justify;
display: flex;
flex-direction: column;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};

/* padding: 0 2rem 2rem 2rem; */
& > p {
}
@media (min-width: 48rem) {
  font-size: calc(0.1vw + 1rem);
  /* border-radius: 1rem; */
  /* border: 1px solid #000; */
}
`;

const ContentBox: React.FC<ContentBoxProps> = ({ backgroundimage, children, imageposition, justifyContent }) => {
  return (
    <StyledContentBox justifyContent={justifyContent} backgroundimage={backgroundimage} imageposition={imageposition}>
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;