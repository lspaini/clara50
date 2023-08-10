import * as React from "react";
import { PageProps } from "gatsby";
import Hero from "../components/Hero";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import { styled } from "styled-components";
import Section, { Boxes } from "../components/Section";
import ContentBox from "../components/ContentBox";
import renderClarastrasse from "../images/render_clarastrasse.jpg";
import mapImage from "../images/map.jpeg";
import renderGastro from "../images/CAM3_copia_2.jpg";
import renderAp from "../images/untitled49.png";
import archiPic from "../images/archi.png";
import Footer from "../components/Footer";
import partner1 from "../images/partner/perita.svg";
import partner2 from "../images/partner/benarici.png";
import partner3 from "../images/partner/durable.png";
import partner4 from "../images/partner/gt.png";
import partner5 from "../images/partner/garden.png";
import partner6 from "../images/partner/eitel.png";
import Partners from "../components/Partners";
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

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
      <ThemeProvider theme={theme}>
      <Main>
        <Hero />
        <Section id="projekt" title="Projekt" bgcolor={theme.colors.primaryBg}>
          <Boxes>
            <ContentBox> <h2>Am Messeplatz verankert</h2>
            <p>Die Clarastrasse 50 befindet sich unweit des Messeplatzes und in der unmittelbaren Umgebung des Claraturms. Mit guter Anbindung an die öffentlichen Verkehrsmittel und umgeben von zahlreichen Annehmlichkeiten wie Einkaufsmöglichkeiten, Restaurants und Fitnesscenters, bietet die Lage des Gebäudes den Bewohnern alles, was sie für ein komfortables und urbanes Leben benötigen.</p>
            </ContentBox>
            <ContentBox backgroundimage={mapImage}/>
          </Boxes>
          <Boxes>
            <ContentBox backgroundimage={renderAp} />
            <ContentBox><h2>Basel wächst</h2><p>Es entstehen 13 Wohnungen in verschiedenen Grössen mit total 448 m2 neuen Wohnraum für Basel. Die Grundrisse wurden auf eine effiziente Raumnutzung konzipiert, die auch auf engem Raum eine ausserordentlich hohe Lebensqualität bietet.</p></ContentBox>
          </Boxes>
          <Boxes>
            <ContentBox><h2>Co-Working bis Musik: Clarastrasse lebt.</h2><p>Unser Gebäude kombiniert auf innovative Art und Weise verschiedene Nutzungen: Co-Working, Gastronomie/Gewerbe, Galerie und Bandraum. So sollen diese ineinander verfliessen und experimentation fördern, um der Clarastrasse neues Leben einzuhauchen.</p></ContentBox>
            <ContentBox backgroundimage={renderGastro}/>
          </Boxes>
        </Section>
        <Section id="architektur" title="Architektur" bgcolor={theme.colors.secondaryBg}>
          <Boxes>
            <ContentBox backgroundimage={renderClarastrasse}/>
            <ContentBox><h2>Architektur trifft Natur.</h2><p>Die Architektur wurde mit der Begrünung des Gebäudes im Fokus ausgestaltet. Dabei wurden nicht nur ästhetische Aspekte berücksichtigt, sondern auch funktionelle und ökologische. Durch die Integration des vertikalen Gartens, dem begrünten Dach mit seinen drei Bäumen, wird nicht nur das Stadtklima, im kleinen Rahmen, positiv beeinflusst, sondern auch Lebensraum für Flora und Fauna geschaffen. Zudem tragen die grünen Elemente zur natürlichen Isolierung des Gebäudes bei, was sich vorteilhaft auf die Energiebilanz auswirkt. Darüber hinaus schafft die Begrünung eine angenehme Atmosphäre für die Bewohner*innen und Nutzer*innen des Gebäudes, indem sie zur Lärmreduzierung beiträgt und die Privatsphäre verbessert.</p></ContentBox>
          </Boxes>
          <Boxes>
            <ContentBox><h2>Nachhaltig durch Innovation.</h2><p>Das Gebäude wird aus einem innovativen neuen Material des ETH-Spinoffs Neustark (Link) bestehen, welches aus Recyclingbeton besteht, welcher zusätzlich CO2 aus der Atmosphäre permanent bindet. Neben dem Heizen, werden Erdsonden auch für die nachhaltige Kühlung über ein Free-Cooling-System (Link) eingesetzt, um am heissessten Fleck der Stadt im Sommer Abhilfe zu schaffen (besser formulieren).
</p></ContentBox>
            <ContentBox backgroundimage={renderClarastrasse}/>
          </Boxes>
          <Boxes>
            <ContentBox backgroundimage={renderClarastrasse}/>
            <ContentBox><h2>Leben Sichtbar machen.</h2><p>Um eine lebendige Aussenwirkung zu haben, zielt die Architektur darauf hin, das Leben im Gebäude nach Aussen zu tragen. Die Fassadenbegrünung zielt darauf ab, nach Innen und nach Aussen einen attraktiven Sichtschutz zu gewähren, der das ziehen der Vorhänge verhindert. So soll ein anonymer Bau verhindert werden.
</p></ContentBox>
          </Boxes>
        </Section>
        <Section id="ueberuns" title="Über uns" bgcolor={theme.colors.primaryBg}>
          <Boxes>
            <ContentBox backgroundimage={archiPic}/>
            <ContentBox><h2>Wir sind Livio und Flavio.</h2><p>Wir sind in Basel tief verankert und haben nun das Privileg dieses Projekt an prominenter Lage umsetzen. Die Möglichkeit in der eigenen Stadt etwas neues zu schaffen haben wir nicht auf die leichte Schulter genommen. Im Gegenteil:

Das Projekt war von anfang an eine Herzensanlegegenheit, die mit eine Frage startete: Wie können wir dazu beitragen eine attraktivere Clarastrasse zu gestalten? Dieses Gebäude ist unsere Antwort, die mit der Beihilfe von unzähligen Basler:innen entstanden ist. 

Wir freuen uns auf die Entstehung eines lebendiges Gebäudes, welches zum Verweilen einladen soll.
 </p></ContentBox>
          </Boxes>
          </Section>
        <Section id="partner" title="Partner" bgcolor={theme.colors.primaryBg}>
          <Boxes>
          <Partners logos={partnerLogos} />
          </Boxes>
        </Section>
        <Footer />
      </Main>
      </ThemeProvider>
    </>
  )
}

export default IndexPage;
export const Head: React.FC = () => <title>Clara fifty</title>