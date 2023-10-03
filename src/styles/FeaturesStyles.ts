import { styled } from 'styled-components';


export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2rem;
  box-sizing: border-box;
  width: 100%;
  @media (min-width: 48rem) {
    gap: 4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 4rem; 
  margin-bottom: 1rem;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;


export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    `;

export const FeatureTitle = styled.h3`
    font-size: 3rem;
    font-weight: 200;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.75rem;
    `;

export const FeatureDescription = styled.div`
    font-size: 2rem;
    font-weight: 200;
    color: ${props => props.theme.colors.primary};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    `;
