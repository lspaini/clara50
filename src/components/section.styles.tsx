// StyledComponents.js
import styled from 'styled-components';


export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 1fr); // Divide container into 13 columns
    grid-gap: 1px;
    position: relative; // Relative positioning for the pseudo-element
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    height: 100vh;
    margin-top: 8rem;

    // Pseudo-element to create the lines below the title
    &::before {
        content: '';
        position: absolute; // Absolute positioning to control placement
        top: 8rem; // Adjust based on your title's size and desired spacing
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(to right, #DEDEDE 0, #DEDEDE 0.0769%, transparent 0.0769%, transparent 7.6923%); // 13 lines across the width
        z-index: -1; // Place behind the main content
    }
`;



export const SectionTitleLetter = styled.h1`
font-size: calc(3vw + 3rem); // Adjust according to your design requirements
font-weight: 200;
line-height: 1.2;
margin: 0; 
color: #000;
font-family: 'Gilroy', sans-serif;
text-align: center; // Centers the letter within its grid cell
text-transform: uppercase;
`;

