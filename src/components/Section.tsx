import React from 'react';
import { OuterWrapper, SectionBoxes, SectionContainer, SectionTitle, SectionTitleContainer } from '../styles/sectionStyle';

interface SectionProps {
  id?: string;
    title?: string;
    children?: React.ReactNode;
    bgcolor?: string;
    color?: string;
  }


  function Section({ id, title = 'Section', children, bgcolor, color }: SectionProps) {
    return (
      <OuterWrapper id={id} bgcolor={bgcolor}>
        <SectionContainer>
          <SectionTitleContainer>
             <SectionTitle color={color}>{title}</SectionTitle>
          </SectionTitleContainer>
           <SectionBoxes bgcolor={bgcolor}>
              {children}
           </SectionBoxes>
        </SectionContainer>
      </OuterWrapper>
    );
  }
  
export default Section;