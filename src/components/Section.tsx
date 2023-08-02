import React from 'react';
import { BoxGrid, ImageBox, SectionContainer, SectionTitleLetter } from './Section.styles';

interface SectionProps {
    title?: string; // Make title optional with a default value
    children?: React.ReactNode; // Children can be any renderable React node
  }

  function Section({ title = 'Section', children }: SectionProps) {
    return (
      <SectionContainer>
        <div></div> {/* Empty grid cell to offset the letters by one column */}
        {Array.from(title).map((letter, index) => (
          <SectionTitleLetter key={index}>
            {letter}
          </SectionTitleLetter>
        ))}
        <BoxGrid>
        {children} {/* Render children */}
        </BoxGrid>
      </SectionContainer>
    );
  }
  
export default Section;