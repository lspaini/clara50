import styled from 'styled-components';

export const LandingContainer = styled.div`
    height: 700vh;
    width: 100%;
    z-index: -1;
`;

export const TitleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100vh;
    z-index: 1;
    background: ${(props) => props.theme.colors.primaryBg};
    color: black;
    padding: 3rem;
    @media (min-width: 576px) {
        font-size: 3rem;
        max-width: 1200px;
    }
`;

export const TextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;



export const MainTitleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 1;
    color: white;
    margin-bottom: 100vh;
`;

export const Title = styled.h2<{ bottom: number}>`
    bottom: ${(props) => props.bottom}px;
    box-sizing: border-box;
    font-weight: 200;
    display: flex;
    align-items: center;
    justify-content: center;  
    display: flex;
    letter-spacing: 0.1rem;
    flex-direction: column;
    @media (min-width: 375px) {
        font-size: 4rem;
    }
    @media (min-width: 576px) {
        min-width: 10rem;
        min-height: 3.125rem;
        font-size: 3rem;
    }
`;
export const MainTitle = styled.h1<{ bottom: number}>`
    bottom: ${(props) => props.bottom}px;
    padding: 10%;
    box-sizing: border-box;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;  
    display: flex;
    letter-spacing: 0.1rem;
    flex-direction: column;
    @media (min-width: 576px) {
        font-size: 3rem;
    }
    @media (min-width: 880px) {
        font-size: 4rem;
    }
    @media (min-width: 1100px) {
        font-size: 5rem;
    }
    @media (min-width: 1400px) {
        font-size: 8rem;
    }
`;

export const TextBox = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    box-sizing: border-box;
    font-family: 'Gilroy', sans-serif;
    font-size: 2rem;
    line-height: 1.25;
    @media (min-width: 576px) {
        max-width: 650px;
    }
    @media (min-width: 48rem) {
    text-align: justify;
    line-height: 1.5;
    }
    `;

export const LandingImageContainer = styled.div<{ image: string}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
    box-sizing: border-box;
`;
