import React from 'react';
import { styled } from 'styled-components';

interface SectionProps {
    title?: string; // Make title optional with a default value
    children?: React.ReactNode; // Children can be any renderable React node
  }



const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 1fr); // Divide container into 13 columns
    grid-gap: 1px;
    position: relative; // Relative positioning for the pseudo-element
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #fff;
    width: 100%;
    // max-width: 1920px;

    &::before {
      content: '';
      position: absolute;
      top: 8rem;
      left: 0;
      right: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        to right,
        #CDCDCD 0,
        #CDCDCD 0.0769%,
        transparent 0.0769%,
        transparent 7.6923%
      );
      z-index: 0; // Adjust the z-index to position behind the boxes
  }
`;



const SectionTitleLetter = styled.h1`
font-size: calc(3vw + 3rem); // Adjust according to your design requirements
font-weight: 200;
line-height: 1.2;
margin: 0; 
color: #000;
font-family: 'Gilroy', sans-serif;
text-align: center; // Centers the letter within its grid cell
text-transform: uppercase;
`;



  function Section({ title = 'Section', children }: SectionProps) {
    return (
      <SectionContainer>
        <div></div> {/* Empty grid cell to offset the letters by one column */}
        {Array.from(title).map((letter, index) => (
          <SectionTitleLetter key={index}>
            {letter}
          </SectionTitleLetter>
        ))}
        {children} {/* Render children */}
      </SectionContainer>
    );
  }
  
export default Section;