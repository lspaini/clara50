import React from 'react';
import { styled } from 'styled-components';

interface SectionProps {
    title?: string; // Make title optional with a default value
    children?: React.ReactNode; // Children can be any renderable React node
    bgcolor?: string;
  }



  const SectionContainer = styled.div<SectionProps>`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-gap: 1px;
  box-sizing: border-box;
  width: 100%;
  z-index: 1;
  padding-top: 4rem;
  padding-left: 3%;
  padding-right: 3%;
  background: ${props => props.bgcolor ?? props.bgcolor};
`;

const SectionBoxes = styled.div<SectionProps>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 2rem;
  padding-bottom: 10rem;
  padding-left: 5%;
  padding-right: 5%;
  background: ${props => props.bgcolor ?? props.bgcolor};
`;

const SectionTitleLetter = styled.h1`
  font-family: 'Gilroy', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: calc(3vw + 3rem);
  font-weight: 200;
  line-height: 1;
  margin: 0; 
  color: #000;
`;




  function Section({ title = 'Section', children, bgcolor }: SectionProps) {
    return (
      <>
      <SectionContainer bgcolor={bgcolor}>
        <div></div> {/* Empty grid cell to offset the letters by one column */}
        {Array.from(title).map((letter, index) => (
          <SectionTitleLetter key={index}>
            {letter}
          </SectionTitleLetter>
        ))}
      </SectionContainer>
        <SectionBoxes bgcolor={bgcolor}>
        {children}
        </SectionBoxes>
        </>
    );
  }
  
export default Section;