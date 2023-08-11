// Footer.tsx
import React from 'react';
import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;  // Adjust as needed
  background-color: #000;  // Light grey background
  font-size: 1rem;
  color: #fff;
  font-family: 'Gilroy', sans-serif;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* © {new Date().getFullYear()} Erda Immobilien. All rights reserved. */}
    </FooterContainer>
  );
};

export default Footer;
