import React from 'react';
import { styled } from 'styled-components';
import Divider from './Divider';

interface SectionProps {
    title?: string; // Make title optional with a default value
    children?: React.ReactNode; // Children can be any renderable React node
    bgcolor?: string;
    id: string;
    color?: string;
  }

  const OuterWrapper = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${props => props.bgcolor ?? props.bgcolor};
  width: 100%;
`;

const SectionContainer = styled.div`
  min-height: 100vh;
`

  const SectionTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  box-sizing: border-box;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
  justify-self: flex-start;
  `;

const SectionBoxes = styled.div<SectionProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  @media (min-width: 48rem) { // 768px replaced by 48rem
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
`;

const SectionTitleLetter = styled.h1`
  font-family: 'Gilroy', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: calc(3vw + 3rem);
  font-weight: 200;
  line-height: 1;
  margin: 0; 
  color: ${props => props.color ?? '#000'};
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (min-width: 765px) {
    flex-direction: row;
    gap: 4rem;
    max-width: 1400px;
  }
`;




  function Section({ id, title = 'Section', children, bgcolor, color }: SectionProps) {
    return (
      <OuterWrapper id={id} bgcolor={bgcolor}>
        {/* <Divider /> */}
      <SectionTitleContainer>
        <div></div> {/* Empty grid cell to offset the letters by one column */}
        {Array.from(title).map((letter, index) => (
          <SectionTitleLetter key={index} color={color}>
            {letter}
          </SectionTitleLetter>
        ))}
      </SectionTitleContainer>
        <SectionContainer>
        <SectionBoxes bgcolor={bgcolor}>
        {children}
        </SectionBoxes>
        </SectionContainer>
        {/* <Divider /> */}
        </OuterWrapper>
    );
  }
  
export default Section;