// StyledComponents.js
import styled from 'styled-components';
import RenderClarastrasse from '../images/render_clarastrasse.jpg';

const LetterSize = '4.5rem'; // 72px replaced by 4.5rem

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    max-width: 75rem;  // 1200px replaced by 75rem
    height: 100vh;
    padding: 3rem; // 48px replaced by 3rem
`;


export const LandingGrid = styled.div`
    display: grid;
    grid-template-areas: 
    "lefttop righttop"
    "lefttop righttop"
    "lefttop righttop"
    "leftbottom righttop"
    "leftbottom righttop"
    "leftbottom rightbottom";
    grid-template-columns: 2fr 1.5fr; // 2 fractions for the left column, 1.5 fractions for the right column
    grid-template-rows: repeat(6, 1fr); 
    height: calc(90vh - 1.25rem);  // Adjusted for smaller screens
    width: 90vw;   // Adjusted for smaller screens
    gap: 0.3125rem;                  // Adjusted for smaller screens
    box-sizing: border-box;

    @media (min-width: 48rem) { // 768px replaced by 48rem
        grid-template-areas: 
        "lefttop lefttop righttop righttop"
        "lefttop lefttop righttop righttop"
        "lefttop lefttop righttop righttop"
        "leftbottom leftbottom righttop righttop"
        "leftbottom leftbottom righttop righttop"
        "leftbottom leftbottom rightbottom rightbottom";
        grid-template-columns: 2fr 2fr 1.5fr 1.5fr; // 2 fractions for the left columns, 1.5 fractions for the right columns
        height: 100%;
        width: 100%;
        gap: 1.25rem; // 20px replaced by 1.25rem
    }
`;



export const HeaderArea = styled.div`
    grid-area: lefttop;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.625rem; // 10px replaced by 0.625rem
    text-transform: uppercase;
    box-sizing: border-box;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.625rem; // 10px replaced by 0.625rem
`;

export const TitleLetter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(4.5rem + (2 - 4.5) * ((100vw - 300px) / (1600 - 300))); // Scale between 2rem and 4.5rem between viewport widths of 300px and 1600px
    width: 4.5rem;
    height: 4.5rem;
    font-family: 'Gilroy', sans-serif;

    @media (max-width: 64.5rem) { // 1036px replaced by 64.5rem
        font-size: calc(2rem + 2.5 * ((100vw - 20rem) / (64.5 - 20)));
        width: calc(2rem + 2.5 * ((100vw - 20rem) / (64.5 - 20)));
        height: calc(2rem + 2.5 * ((100vw - 20rem) / (64.5 - 20)));
    }
`;


export const NavigationArea = styled.div`
    grid-area: leftbottom;
    color: white;
    background-color: #000;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0.625rem; // 10px replaced by 0.625rem
    box-sizing: border-box;

    @media (min-width: 74.875rem) { // 1198px replaced by 74.875rem
        flex-direction: row; 
        align-items: flex-end;
    }
`;

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 0.625rem; // 10px replaced by 0.625rem
    font-family: 'Helvetica', sans-serif;
    font-size: 2rem;

    &:hover {
        color: gray;
    }
    @media (min-width: 74.875rem) { // 1198px replaced by 74.875rem
        margin-right: 1.25rem; // 20px replaced by 1.25rem
        font-size: 1rem;
    }
`;

export const ImageArea = styled.div`
    grid-area: righttop;
    background-image: url(${RenderClarastrasse});
    background-size: cover;  // makes sure the image covers the whole area
    background-position: center; // centers the image
    box-sizing: border-box;
`;

export const FooterArea = styled.div`
    grid-area: rightbottom;
    color: #000;
    background-color: #fff;
    border: 0.625rem solid black; // 10px replaced by 0.625rem
    box-sizing: border-box;
    font-family: 'Gilroy', sans-serif;
    font-size: calc(2.5rem + (1 - 2.5) * ((100vw - 300px) / (1600 - 300))); // Scale between 1rem and 2.5rem between viewport widths of 300px and 1600px
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 64.5rem) { // 1036px replaced by 64.5rem
        font-size: calc(1rem + 1.5 * ((100vw - 20rem) / (64.5 - 20)));
    }
`;
