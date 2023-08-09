import * as React from "react";
import { PageProps } from "gatsby";
import Hero from "../components/Hero";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import { styled } from "styled-components";
import Section, { Boxes } from "../components/Section";
import ContentBox from "../components/ContentBox";
import renderClarastrasse from "../images/render_clarastrasse.jpg";
import renderClarahof from "../images/CAM4b_copia_2.jpg";
import renderGastro from "../images/CAM3_copia_2.jpg";
import Footer from "../components/Footer";
import partner1 from "../images/partner/perita.svg";
import partner2 from "../images/partner/benarici.png";
import partner3 from "../images/partner/durable.png";
import partner4 from "../images/partner/gt.png";
import partner5 from "../images/partner/garden.png";
import partner6 from "../images/partner/eitel.png";
import Partners from "../components/Partners";

const partnerLogos = [
  partner1, partner2, partner3, partner4, partner5, partner6
];


const Main = styled.main`
  display: flex;
  flex-direction: column;
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
        <Section title="Projekt" bgcolor="#f8f6f2">
          <Boxes>
            <ContentBox> <h2>Lage</h2>Unser Gebäude befindet sich in einer erstklassigen Lage, die eine perfekte Mischung aus städtischer Dynamik und beruhigender Natur bietet. Mit guter Anbindung an die öffentlichen Verkehrsmittel und umgeben von zahlreichen Annehmlichkeiten wie Einkaufszentren, Parks und Schulen, bietet die Lage des Gebäudes den Bewohnern alles, was sie für ein komfortables und bequemes Leben benötigen.</ContentBox>
            <ContentBox backgroundimage={renderClarastrasse}/>
          </Boxes>
          <Boxes>
            <ContentBox backgroundimage={renderClarahof} />
            <ContentBox><h2>Wohnungen</h2> In unserem Bestreben, den Bewohnern eine breite Auswahl an Wohnmöglichkeiten zu bieten, haben wir die Anzahl der Wohnungen im Gebäude um 118% erhöht. Unser neuer Wohnraum bietet eine Vielzahl von Größenoptionen, von kompakten Studios für Singles oder Paare bis hin zu geräumigen Mehrzimmerwohnungen für Familien. Jede Wohnung ist sorgfältig gestaltet, um maximale Raumausnutzung und Komfort zu bieten.</ContentBox>
          </Boxes>
          <Boxes>
            <ContentBox><h2>Coworking, Gastro, Bandraum</h2><p>Unser Gebäude kombiniert auf effiziente Weise vielseitige Umgebungen: Co-Working, Gastronomie, Galerie und Bandraum.

Der Co-Working Space bietet flexible Arbeitsbereiche für moderne Berufstätige, während unsere gastronomischen Einrichtungen eine Vielzahl an Geschmäckern bedienen und gleichzeitig als soziale Treffpunkte dienen.

Die Galerie fördert lokale Kunst und bietet Inspiration, und der Bandraum bringt Musikfreunde zusammen und unterstützt eine pulsierende Musikszene.</p></ContentBox>
            <ContentBox backgroundimage={renderGastro}/>
          </Boxes>
        </Section>
        <Section title="Architektur" bgcolor="#f8e8b5">
          <Boxes>
            <ContentBox backgroundimage={renderGastro}/>
            <ContentBox><p>Unser Gebäude kombiniert auf effiziente Weise vielseitige Umgebungen: Co-Working, Gastronomie, Galerie und Bandraum.

Der Co-Working Space bietet flexible Arbeitsbereiche für moderne Berufstätige, während unsere gastronomischen Einrichtungen eine Vielzahl an Geschmäckern bedienen und gleichzeitig als soziale Treffpunkte dienen.

Die Galerie fördert lokale Kunst und bietet Inspiration, und der Bandraum bringt Musikfreunde zusammen und unterstützt eine pulsierende Musikszene.</p></ContentBox>
          </Boxes>
        </Section>
        <Section title="FAQ" bgcolor="#f8f6f2">
          <Boxes>
          </Boxes>
        </Section>
        <Section title="Partner" bgcolor="#f8e8b5">
          <Boxes>
          <Partners logos={partnerLogos} />
          </Boxes>
        </Section>
        <Section title="Über uns" bgcolor="#f8f6f2">
          <Boxes>
            <ContentBox backgroundimage={renderGastro}/>
            <ContentBox><p>Unser Gebäude kombiniert auf effiziente Weise vielseitige Umgebungen: Co-Working, Gastronomie, Galerie und Bandraum.

Der Co-Working Space bietet flexible Arbeitsbereiche für moderne Berufstätige, während unsere gastronomischen Einrichtungen eine Vielzahl an Geschmäckern bedienen und gleichzeitig als soziale Treffpunkte dienen.

Die Galerie fördert lokale Kunst und bietet Inspiration, und der Bandraum bringt Musikfreunde zusammen und unterstützt eine pulsierende Musikszene.</p></ContentBox>
          </Boxes>
        </Section>
        <Section title="Kontakt" bgcolor="#f8e8b5">
          <Boxes>
            <ContentBox><p>Unser Gebäude kombiniert auf effiziente Weise vielseitige Umgebungen: Co-Working, Gastronomie, Galerie und Bandraum.

Der Co-Working Space bietet flexible Arbeitsbereiche für moderne Berufstätige, während unsere gastronomischen Einrichtungen eine Vielzahl an Geschmäckern bedienen und gleichzeitig als soziale Treffpunkte dienen.

Die Galerie fördert lokale Kunst und bietet Inspiration, und der Bandraum bringt Musikfreunde zusammen und unterstützt eine pulsierende Musikszene.</p></ContentBox>
            <ContentBox backgroundimage={renderGastro}/>
          </Boxes>
        </Section>
        <Footer />
      </Main>
    </>
  )
}

export default IndexPage;
export const Head: React.FC = () => <title>Clara fifty</title>