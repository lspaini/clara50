import * as React from "react";
import { PageProps } from "gatsby";
import Hero from "../components/Hero";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import { styled } from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Hero />
      </Main>
    </>
  )
}

export default IndexPage;
export const Head: React.FC = () => <title>Home Page</title>