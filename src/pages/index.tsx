import * as React from "react";
import { PageProps } from "gatsby";
import Hero from "../components/Hero";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import { styled } from "styled-components";
import Section from "../components/Section";
import Plant, { plantImages } from "../components/Plant";
import ContentBox from "../components/ContentBox";
import renderClarastrasse from "../images/render_clarastrasse.jpg";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 50%;
  position: absolute;
  margin-top: 12rem;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const createPlantsForSection = () => {
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

    plants.push(
      <Plant
        key={i}
        backgroundImage={plantImages[plantIndex]}
        lineIndex={lineIndex}
        mirrored={mirrored}
      />
    );
  }

  return plants;
};



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Hero />
        <Section title="Lage">
        {/* {createPlantsForSection()} */}
          <Boxes>
          <ContentBox>Unser Gebäude befindet sich in einer erstklassigen Lage, die eine perfekte Mischung aus städtischer Dynamik und beruhigender Natur bietet. Mit guter Anbindung an die öffentlichen Verkehrsmittel und umgeben von zahlreichen Annehmlichkeiten wie Einkaufszentren, Parks und Schulen, bietet die Lage des Gebäudes den Bewohnern alles, was sie für ein komfortables und bequemes Leben benötigen.</ContentBox>
          <ContentBox backgroundImage={renderClarastrasse}/>
          </Boxes>
        </Section>
        <Section title="Wohnungen">
        {/* {createPlantsForSection()} */}
          <Boxes>
          <ContentBox backgroundImage={renderClarastrasse} />
          <ContentBox>In unserem Bestreben, den Bewohnern eine breite Auswahl an Wohnmöglichkeiten zu bieten, haben wir die Anzahl der Wohnungen im Gebäude um 118% erhöht. Unser neuer Wohnraum bietet eine Vielzahl von Größenoptionen, von kompakten Studios für Singles oder Paare bis hin zu geräumigen Mehrzimmerwohnungen für Familien. Jede Wohnung ist sorgfältig gestaltet, um maximale Raumausnutzung und Komfort zu bieten.</ContentBox>
          </Boxes>
        </Section>
        <Section title="Gewerbe">
        {/* {createPlantsForSection()} */}
        </Section>
        <Section title="Architektur">
          {/* {createPlantsForSection()} */}
          </Section>
        <Section title="Über uns">
          {/* {createPlantsForSection()} */}
          </Section>
        <Section title="Kontakt">
          {/* {createPlantsForSection()} */}
          </Section>
      </Main>
    </>
  )
}

export default IndexPage;
export const Head: React.FC = () => <title>Clara 50</title>