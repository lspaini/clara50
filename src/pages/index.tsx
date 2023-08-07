import * as React from "react";
import { PageProps } from "gatsby";
import Hero from "../components/Hero";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import { styled } from "styled-components";
import Section from "../components/Section";
import Plant, { plantImages } from "../components/Plant";
import ContentBox from "../components/ContentBox";
import renderClarastrasse from "../images/render_clarastrasse.jpg";

const BackgroundLines = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    to right,
    #CDCDCD 0,
    #CDCDCD 0.0769%,
    transparent 0.0769%,
    transparent 7.6923%
  );
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #DCD4C9;
  position: relative;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  gap: 1rem;
  width: 100%;
`;

const createPlantsForSection = (emptyLines) => {
  const plantLines = [...Array(13).keys()]; // Array representing the 12 lines
  const plantIndexes = [...Array(9).keys()]; // Array representing the 9 plant images

  // Shuffle the plantIndexes to randomize the plant images
  plantIndexes.sort(() => Math.random() - 0.5);

  // Create plants by pairing lines and plant images, looping through lines twice
  const plants = [];
  for (let i = 0; i < plantLines.length * 2; i++) {
    const lineIndex = i % plantLines.length;
    const plantIndex = plantIndexes[i % plantIndexes.length];
    const mirrored = i >= plantLines.length; // Mirror the plant on the second iteration

    // Only add plant if it's not on an empty line
    if (emptyLines.includes(lineIndex)) {
      plants.push(
        <Plant
          key={i}
          backgroundImage={plantImages[plantIndex]}
          lineIndex={lineIndex}
          mirrored={mirrored}
        />
      );
    }
  }

  return plants;
};



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
      {/* <BackgroundLines /> */}
        {/* {createPlantsForSection([0,1,2,11,12])} */}
        <Hero />
        <Section title="Lage">
          <Boxes>
            <ContentBox>Unser Gebäude befindet sich in einer erstklassigen Lage, die eine perfekte Mischung aus städtischer Dynamik und beruhigender Natur bietet. Mit guter Anbindung an die öffentlichen Verkehrsmittel und umgeben von zahlreichen Annehmlichkeiten wie Einkaufszentren, Parks und Schulen, bietet die Lage des Gebäudes den Bewohnern alles, was sie für ein komfortables und bequemes Leben benötigen.</ContentBox>
            <ContentBox backgroundImage={renderClarastrasse}/>
          </Boxes>
        </Section>
      </Main>
    </>
  )
}

export default IndexPage;
export const Head: React.FC = () => <title>Clara fifty</title>