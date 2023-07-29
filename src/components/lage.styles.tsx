// StyledComponents.js
import styled from 'styled-components';


export const LageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);  // Divide container into 12 columns
    grid-gap: 1px;
    background: repeating-linear-gradient(to right, #DEDEDE, #DEDEDE 1px, transparent 1px, transparent 8.33%);
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    max-width: 75rem;  // 1200px replaced by 75rem
    height: 100vh;
`;

export const LageTitleLetter = styled.h1`
    font-size: 6rem; // 80px replaced by 5rem
    font-weight: 200;
    line-height: 1.2;
    margin: 0; 
    color: #000;
    font-family: 'Gilroy', sans-serif;
    text-align: center; // Centers the letter within its grid cell
    text-transform: uppercase;
`;
