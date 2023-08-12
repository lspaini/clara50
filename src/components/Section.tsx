import React from 'react';
import  styled  from 'styled-components';

interface SectionProps {
  id?: string;
    title?: string;
    children?: React.ReactNode;
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
  max-width: 1600px;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 48rem) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

  const SectionTitleContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 48rem) {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  `;

const SectionTitle = styled.h1`
  font-family: 'Gilroy', sans-serif;
  text-transform: uppercase;
  font-weight: 200;
  font-size: calc(2vw + 2rem);
  margin: 0;
  padding: 0;
  width: 100%;
  color: ${props => props.color ?? '#000'};
  letter-spacing: 0.3rem;
  
  @media (min-width: 48rem) {
    letter-spacing: 2rem;
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
  display: grid;
  grid-template-columns: 1fr;
  box-sizing: border-box;
  @media (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    gap: 4rem;
  }
`;




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