import styled from "styled-components";

interface SectionProps {
    id?: string;
      title?: string;
      children?: React.ReactNode;
      bgcolor?: string;
      color?: string;
    }

interface BoxProps {
  reverse?: boolean;
}

export const OuterWrapper = styled.div<SectionProps>`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
background: ${props => props.bgcolor ?? 'inherit'};
width: 100%;
z-index: 1;
`;

export const SectionContainer = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
max-width: 1600px;
box-sizing: border-box;
padding-left: 1rem;
padding-right: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 48rem) {
  padding-left: 6rem;
  padding-right: 6rem;
}
`


export const SectionTitleContainer = styled.div`
display: grid;
box-sizing: border-box;
width: 100%;
margin-top: 2rem;
margin-bottom: 1rem;

@media (min-width: 48rem) {
  margin-top: 4rem;
  margin-bottom: 3rem;
}
`;

export const SectionTitle = styled.h2`
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


export const SectionBoxes = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (min-width: 48rem) { 
    box-sizing: border-box;
    margin-top: 2rem;
    margin-bottom: 5rem;
}
`;

export const Boxes = styled.div<BoxProps>`
display: flex;
flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
box-sizing: border-box;
width: 100%;
@media (min-width: 48rem) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}
`;