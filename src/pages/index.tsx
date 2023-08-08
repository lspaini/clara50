import * as React from "react";
import { PageProps } from "gatsby";
import Hero from "../components/Hero";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import { styled } from "styled-components";
import Section from "../components/Section";
import Plant, { plantImages } from "../components/Plant";
import ContentBox from "../components/ContentBox";
import renderClarastrasse from "../images/render_clarastrasse.jpg";
import renderClarahof from "../images/CAM4b_copia_2.jpg";
import renderGastro from "../images/CAM3_copia_2.jpg";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #CCD5AE;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  gap: 1rem;
  width: 90%;
`;

// const createPlantsForSection = (emptyLines) => {
//   const plantLines = [...Array(13).keys()]; // Array representing the 12 lines
//   const plantIndexes = [...Array(9).keys()]; // Array representing the 9 plant images

//   // Shuffle the plantIndexes to randomize the plant images
//   plantIndexes.sort(() => Math.random() - 0.5);

//   // Create plants by pairing lines and plant images, looping through lines twice
//   const plants = [];
//   for (let i = 0; i < plantLines.length * 2; i++) {
//     const lineIndex = i % plantLines.length;
//     const plantIndex = plantIndexes[i % plantIndexes.length];
//     const mirrored = i >= plantLines.length; // Mirror the plant on the second iteration

//     // Only add plant if it's not on an empty line
//     if (emptyLines.includes(lineIndex)) {
//       plants.push(
//         <Plant
//           key={i}
//           backgroundImage={plantImages[plantIndex]}
//           lineIndex={lineIndex}
//           mirrored={mirrored}
//         />
//       );
//     }
//   }

//   return plants;
// };



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
      <Background />
        {/* {createPlantsForSection([0,1,2,11,12])} */}
        <Hero />
        <Section title="Lage" bgcolor="#FEFAE0">
          <Boxes>
            <ContentBox>Unser Gebäude befindet sich in einer erstklassigen Lage, die eine perfekte Mischung aus städtischer Dynamik und beruhigender Natur bietet. Mit guter Anbindung an die öffentlichen Verkehrsmittel und umgeben von zahlreichen Annehmlichkeiten wie Einkaufszentren, Parks und Schulen, bietet die Lage des Gebäudes den Bewohnern alles, was sie für ein komfortables und bequemes Leben benötigen.</ContentBox>
            <ContentBox backgroundImage={renderClarastrasse}/>
          </Boxes>
        </Section>
        <Section title="Wohnungen" bgcolor="#FAEDCD">
          <Boxes>
            <ContentBox backgroundImage={renderClarahof} />
            <ContentBox>In unserem Bestreben, den Bewohnern eine breite Auswahl an Wohnmöglichkeiten zu bieten, haben wir die Anzahl der Wohnungen im Gebäude um 118% erhöht. Unser neuer Wohnraum bietet eine Vielzahl von Größenoptionen, von kompakten Studios für Singles oder Paare bis hin zu geräumigen Mehrzimmerwohnungen für Familien. Jede Wohnung ist sorgfältig gestaltet, um maximale Raumausnutzung und Komfort zu bieten.</ContentBox>
          </Boxes>
        </Section>
        <Section title="Gewerbe" bgcolor="#E9EDC9">
          <Boxes>
            <ContentBox>Unser Gebäude kombiniert auf effiziente Weise vielseitige Umgebungen: Co-Working, Gastronomie, Galerie und Bandraum.

Der Co-Working Space bietet flexible Arbeitsbereiche für moderne Berufstätige, während unsere gastronomischen Einrichtungen eine Vielzahl an Geschmäckern bedienen und gleichzeitig als soziale Treffpunkte dienen.

Die Galerie fördert lokale Kunst und bietet Inspiration, und der Bandraum bringt Musikfreunde zusammen und unterstützt eine pulsierende Musikszene.</ContentBox>
            <ContentBox backgroundImage={renderGastro}/>
          </Boxes>
        </Section>
      </Main>
    </>
  )
}

export default IndexPage;
export const Head: React.FC = () => <title>Clara fifty</title>