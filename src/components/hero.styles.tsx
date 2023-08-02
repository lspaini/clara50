// StyledComponents.js
import styled from 'styled-components';
import RenderClarastrasse from '../images/render_clarastrasse.jpg';


export const LandingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
height: 100vh;
@media (min-width: 48rem) { // 768px replaced by 48rem
    padding: 5%;
    width: 80%;
}
@media (min-width: 1440px) { // 1440px
    padding: 5%;
}
`;


export const LandingGrid = styled.div`
    display: grid;
    grid-template-areas: 
        "HeaderArea"
        "ImageArea"
        "NavigationArea"
        "FooterArea";
    grid-template-columns: 1fr; // Single column for mobile view
    grid-template-rows: repeat(4, 1fr); 
    height: calc(90vh - 1.25rem);
    width: 90vw;
    gap: 0.3125rem;
    box-sizing: border-box;

    @media (min-width: 48rem) { // 768px replaced by 48rem
        grid-template-areas: 
            "HeaderArea HeaderArea ImageArea ImageArea"
            "HeaderArea HeaderArea ImageArea ImageArea"
            "HeaderArea HeaderArea ImageArea ImageArea"
            "NavigationArea NavigationArea ImageArea ImageArea"
            "NavigationArea NavigationArea ImageArea ImageArea"
            "NavigationArea NavigationArea FooterArea FooterArea";
        grid-template-columns: 2fr 2fr 1.5fr 1.5fr;
        grid-template-rows: repeat(6, 1fr);
        height: 100%;
        width: 100%;
        gap: 1.25rem;
    }
`;





export const HeaderArea = styled.div`
    grid-area: HeaderArea;
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
    font-size: calc(2rem + 1.5 * ((100vw - 20rem) / (64.5 - 20))); // Scale for screens smaller than 64.5rem
    width: calc(2rem + 1.5 * ((100vw - 20rem) / (64.5 - 20)));
    height: calc(2rem + 1.5 * ((100vw - 20rem) / (64.5 - 20)));
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;

    @media (min-width: 64.5rem) { // Apply these styles for screens that are at least 64.5rem wide
        font-size: calc(3.5rem + (2 - 3.5) * ((100vw - 300px) / (1600 - 300)));
        width: 3.5rem;
        height: 3.5rem;
    }
`;



export const NavigationArea = styled.div`
    grid-area: NavigationArea;
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
        justify-content: flex-start;
    }
`;

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 0.625rem; // 10px replaced by 0.625rem
    font-family: 'Helvetica', sans-serif;
    font-size: calc(1rem + (2 - 1) * ((100vw - 300px) / (1600 - 300))); // Scale between 1rem and 2rem between viewport widths of 300px and 1600px

    &:hover {
        color: gray;
    }
    @media (min-width: 74.875rem) { // 1198px replaced by 74.875rem
        margin-right: 1.25rem; // 20px replaced by 1.25rem
    }
`;


export const ImageArea = styled.div`
    grid-area: ImageArea;
    background-image: url(${RenderClarastrasse});
    background-size: cover;  // makes sure the image covers the whole area
    background-position: center; // centers the image
    box-sizing: border-box;
`;

export const FooterArea = styled.div`
    grid-area: FooterArea;
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
