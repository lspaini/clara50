import React from 'react';
import  styled  from 'styled-components';

interface SectionProps {
  id: string;
    title?: string; // Make title optional with a default value
    children?: React.ReactNode; // Children can be any renderable React node
    bgcolor?: string;
    color?: string;
  }

  const OuterWrapper = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${props => props.bgcolor ?? 'inherit'};
  width: 100%;
`;

const SectionContainer = styled.div`
  min-height: 100vh;
`

  const SectionTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  box-sizing: border-box;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-left: 1rem;

  @media (min-width: 48rem) {
    padding: 0;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  `;

const SectionTitleLetter = styled.h1`
  font-family: 'Gilroy', sans-serif;
  text-transform: uppercase;
  font-size: calc(2vw + 2rem);
  font-weight: 200;
  margin: 0;
  padding: 0;
  color: ${props => props.color ?? '#000'};
  
  @media (min-width: 48rem) {
    font-size: calc(3vw + 3rem);
  }
`;

const SectionBoxes = styled.div<SectionProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  @media (min-width: 48rem) { 
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (min-width: 48rem) {
    flex-direction: row;
    gap: 4rem;
    max-width: 1600px;
  }
`;




  function Section({ id, title = 'Section', children, bgcolor, color }: SectionProps) {
    return (
      <OuterWrapper id={id} bgcolor={bgcolor}>
        <SectionContainer>
      <SectionTitleContainer>
        {Array.from(title).map((letter, index) => (
          <SectionTitleLetter key={index} color={color}>
            {letter}
          </SectionTitleLetter>
        ))}
      </SectionTitleContainer>
          <SectionBoxes bgcolor={bgcolor}>
            {children}
         </SectionBoxes>
        </SectionContainer>
      </OuterWrapper>
    );
  }
  
export default Section;