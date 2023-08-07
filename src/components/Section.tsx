import React from 'react';
import { styled } from 'styled-components';

interface SectionProps {
    title?: string; // Make title optional with a default value
    children?: React.ReactNode; // Children can be any renderable React node
  }



const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-gap: 1px;
    box-sizing: border-box;
    width: 100%;
    z-index: 1;
`;

const SectionTitle = styled.div`
width: 100vw;
background: #fff;
`

const SectionTitleLetter = styled.h1`
font-size: calc(3vw + 3rem);
font-weight: 200;
line-height: 1;
margin: 0; 
color: #000;
font-family: 'Gilroy', sans-serif;
text-align: center;
text-transform: uppercase;
`;

const SectionBoxes = styled.div`
    width: 100vw - 1rem;
    box-sizing: border-box;
    padding: 1rem;
    z-index: 1;
`;



  function Section({ title = 'Section', children }: SectionProps) {
    return (
      <>
      <SectionContainer>
        <div></div> {/* Empty grid cell to offset the letters by one column */}
        {Array.from(title).map((letter, index) => (
          <SectionTitleLetter key={index}>
            {letter}
          </SectionTitleLetter>
        ))}
      </SectionContainer>
        <SectionBoxes>
        {children}
        </SectionBoxes>
        </>
    );
  }
  
export default Section;