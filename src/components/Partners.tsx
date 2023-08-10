// Partners.tsx
import React from 'react';
import { styled } from 'styled-components';

interface PartnersProps {
  logos: string[];  // Array of logo URLs
}

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  width: calc(80vw - 2rem);  // Subtracting the total potential gap from the width
  height: 100%;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);  // 2 items in a row for smaller screens

  @media (min-width: 48rem) {
    grid-template-columns: repeat(5, 1fr);  // 4 items in a row for larger screens
  }

`;

const Logo = styled.img`
  width: 100%;
  padding: calc(0.5rem + 1vw); // Padding will also adjust with viewport width
  object-fit: contain; 
  box-sizing: border-box;
  filter: grayscale(100%);
`;


const Partners: React.FC<PartnersProps> = ({ logos }) => {
  return (
      <Grid>
        {logos.map((logo, index) => (
          <Logo key={index} src={logo} alt={`Partner ${index + 1}`} />
        ))}
      </Grid>
  );
};

export default Partners;
