import * as React from "react";
import Hero from "../components/Hero";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import { styled } from "styled-components";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Section from "../components/Section";
import { Boxes } from "../styles/sectionStyle";

interface ImageData {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface IndexPageProps extends PageProps {
  data: {
    renderAp: ImageData;
    renderMap: ImageData;
    renderGastro: ImageData;
    renderCl: ImageData;
  };
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;



const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const renderApImage = data.renderAp.childImageSharp.gatsbyImageData;
  const mapImage = data.renderMap.childImageSharp.gatsbyImageData;
  const renderGastro = data.renderGastro.childImageSharp.gatsbyImageData;
  const renderClarastrasse = data.renderCl.childImageSharp.gatsbyImageData;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Main>
        <Hero />
        <Section id="projekt" title="Projekt" bgcolor={theme.colors.primaryBg}>
          <Boxes>
            <ContentBox><h2>Basel wächst</h2><p>Der neu errichtete Bau an der Clarastrasse wird die Wohnungsanzahl von bisher vier auf insgesamt 13 steigern. Diese Wohnungen sind in unterschiedlichen Grössen verfügbar, wobei alle Grundrisse für eine optimale Raumausnutzung konzipiert sind. Dadurch gewährleisten selbst die kompaktesten Einheiten eine überdurchschnittliche Wohnqualität.</p></ContentBox>
            <ContentBox image={renderApImage} />
          </Boxes>
          <Boxes>
            <ContentBox image={mapImage}/>
            <ContentBox> <h2>Am Messeplatz verankert</h2>
            <p>Das Gebäude in der Clarastrasse 50 liegt nur einen Steinwurf vom Messeplatz entfernt und in direkter Nachbarschaft zum Claraturm. Dank einer hervorragenden Anbindung an den öffentlichen Verkehr und einer Vielzahl an nahegelegenen Annehmlichkeiten – darunter Einkaufsmöglichkeiten, Restaurants und Fitnesscenter – profitieren die Bewohner*innen von einem komfortablen und lebendigen Stadtleben.</p>
            </ContentBox>
          </Boxes>
          <Boxes>
            <ContentBox><h2>Für eine lebendige Clarastrasse.</h2><p>Die Clarastrasse 50 vereint diverse Nutzungsmöglichkeiten: Co-Working, Gastronomie, Gewerbe, Galerie und einen Bandraum. Diese Bereiche sind so konzipiert, dass sie nahtlos ineinandergreifen und Experimentierfreude anregen, um der Clarastrasse frischen Wind zu verleihen.</p></ContentBox>
            <ContentBox image={renderGastro}/>
          </Boxes>
        </Section>
        <Section id="architektur" title="Architektur" bgcolor={theme.colors.secondaryBg}>
          <Boxes>
            <ContentBox image={renderClarastrasse}/>
            <ContentBox><h2>Architektur trifft Natur.</h2><p>Die Architektur wurde mit der Begrünung des Gebäudes im Fokus ausgestaltet. Durch die Integration des vertikalen Gartens, dem begrünten Dach mit seinen drei Bäumen, wird nicht nur das Stadtklima, im kleinen Rahmen, positiv beeinflusst, sondern auch Lebensraum für Flora und Fauna geschaffen. Zudem tragen die grünen Elemente zur natürlichen Isolierung des Gebäudes bei, was sich vorteilhaft auf die Energiebilanz auswirkt. Darüber hinaus schafft die Begrünung eine angenehme Atmosphäre für die Bewohner und Nutzer des Gebäudes, indem sie zur Lärmreduzierung beiträgt und die Privatsphäre verbessert.</p></ContentBox>
          </Boxes>
          <Boxes>
            <ContentBox justifycontent="flex-start"><h2>Nachhaltig durch Innovation.</h2><p>Das Gebäude ist aus einem innovativen Material des ETH-Spinoffs Neustark (Link) gefertigt, welches auf Recyclingbeton aufbaut und gleichzeitig CO2 dauerhaft aus der Atmosphäre bindet. Erdsonden fungieren nicht nur als Heizquelle, sondern sorgen dank eines Free-Cooling-Systems (Link) auch für nachhaltige Kühlung. Dies gewährleistet selbst an der wärmsten Stelle der Stadt angenehme Temperaturen im Sommer. Mit unserer Technologieauswahl streben wir danach, die Forschung und Verbreitung solcher Lösungen zu fördern.
</p></ContentBox>
<ContentBox justifycontent="flex-start"><h2>Leben Sichtbar machen.</h2><p>Die Architektur strebt danach, die Vitalität des Gebäudeinneren nach aussen zu reflektieren und so eine lebendige Außenwirkung zu erzeugen. Mit der Fassadenbegrünung wird ein ästhetischer Sichtschutz geschaffen, der das Zuziehen von Vorhängen überflüssig macht und so einen anonymen Gebäudecharakter vermeidet.</p></ContentBox>
          </Boxes>
        </Section>
        <Section id="ueberuns" title="Über uns" bgcolor={theme.colors.primaryBg}>
          <Boxes>
            <ContentBox justifycontent="flex-start"><h2>Wir sind Livio und Flavio.</h2><p>Basel ist unsere Heimat, und es freut uns besonders, dieses Projekt an solch einer zentralen Stelle verwirklichen zu dürfen. Die Möglichkeit, in unserer Stadt etwas Neues zu gestalten, haben wir mit Sorgfalt und Engagement angepackt.<br/> <br/>

Das Projekt begann mit einer einfachen Frage: Wie können wir die Clarastrasse aufwerten? Mit diesem Gebäude bieten wir unsere Lösung an und danken allen Baslerinnen und Baslern, die uns dabei unterstützt haben.
<br/>
<br />Wir freuen uns auf ein Gebäude, das zum Verweilen einlädt.

 </p></ContentBox>
            <ContentBox justifycontent="flex-start">
              <h2>Impressum</h2>
              <p>
                Flavio Spaini <br />
                Meret Oppenheim Strasse 6 <br />
                4053 Basel <br />
                <a href="mailto:flavio@spaini.ch">flavio@spaini.ch</a> <br />
                <br />
                Livio Spaini <br />
                St. Alban-Anlage 27 <br />
                4052 Basel <br />
                <a href="mailto:livio@spaini.ch">livio@spaini.ch</a> <br />
              </p>
            </ContentBox>
          </Boxes>
          </Section>
        <Section id="partner" title="Partner" bgcolor="#000" color="#fff">
          <Boxes>
          {/* <Partners /> */}
          </Boxes>
        </Section>
        <Footer />
      </Main>
      </ThemeProvider>
    </>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    renderAp: file(relativePath: { eq: "untitled49.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, height: 1000)
      }
    }
    renderMap: file(relativePath: { eq: "map.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, height: 1000)
      }
    }
    renderCl: file(relativePath: { eq: "render_clarastrasse.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, height: 1000)
      }
    }
    renderGastro: file(relativePath: { eq: "CAM3_copia_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, height: 1000)
      }
    }
  }
`;


export const Head: React.FC = () => <title>Clarastrasse 50</title>