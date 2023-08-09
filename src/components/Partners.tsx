// Partners.tsx
import React from 'react';
import { styled } from 'styled-components';

interface PartnersProps {
  logos: string[];  // Array of logo URLs
}

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;  // Spacing between logos
  width: 100%;
  height: 100%;
  @media (min-width: 48rem) {
    /* max-width: 1200px;  // Adjust based on your requirements */
  }
`;

const Logo = styled.img`
  width: 200px;  // You can adjust this value as needed
  height: 200px;  // You can adjust this value as needed
  padding: 1rem;
  object-fit: contain;  // Ensures logos maintain their aspect ratio
  box-sizing: border-box;
  /* border-radius: 1rem; */
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
`;

const Partners: React.FC<PartnersProps> = ({ logos }) => {
  return (
    <PartnersContainer>
      <Grid>
        {logos.map((logo, index) => (
          <Logo key={index} src={logo} alt={`Partner ${index + 1}`} />
        ))}
      </Grid>
    </PartnersContainer>
  );
};

export default Partners;
