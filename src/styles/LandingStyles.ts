import styled from 'styled-components';

export const LandingContainer = styled.div`
    height: 470vh;
    width: 100%;
    z-index: -1;
`;

export const TitleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-bottom: 12vh;
    z-index: 1;
`;

export const Title = styled.h1<{ bottom: number}>`
    bottom: ${(props) => props.bottom}px;
    color: #fff;
    padding: 10%;
    box-sizing: border-box;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;  
    border: 1px solid #fff;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    letter-spacing: 0.1rem;
    flex-direction: column;
    @media (min-width: 375px) {
        font-size: 2rem;
    }
    @media (min-width: 576px) {
        min-width: 10rem;
        min-height: 3.125rem;
        font-size: 3rem;
        padding: 4rem 5.5rem;
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
    box-sizing: border-box;
`;
