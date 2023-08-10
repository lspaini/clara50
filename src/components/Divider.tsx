import React from 'react';
import { styled } from 'styled-components';

const DividerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  height: 4rem;  // Adjust the height to your preference
  width: 100%;
`;

const VerticalLine = styled.div`
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.3); // 50% opacity black

  &:last-child {
    border-right: none;  // To avoid an additional border at the end
  }
`;

const Divider: React.FC = () => {
  return (
    <DividerContainer>
      {Array.from({ length: 16 }).map((_, index) => (
        <VerticalLine key={index} />
      ))}
    </DividerContainer>
  );
};

export default Divider;
