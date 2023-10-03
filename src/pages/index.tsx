import * as React from "react";
import GlobalStyle from '../styles/GlobalStyles';  // Adjust path as necessary
import ContentBox from "../components/ContentBox";
import Partners from "../components/Partners";
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Section from "../components/Section";
import { Boxes } from "../styles/sectionStyle";
import Landing from "../components/Landing";
import ClaraStrasse from "../images/render_clarastrasse.png";
import Features from "../components/Features";
import { Main } from "../styles/IndexStyles";

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
    clara: ImageData;
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Landing image={ClaraStrasse}/>
      <Main>
        <Section id="merkmale" title="Merkmale" bgcolor={theme.colors.primaryBg}>
          <Features />
          </Section>
        <Section id="ueberuns" title="Über uns" bgcolor={theme.colors.heroBg}>
          <Boxes>
            <ContentBox justifycontent="flex-start"><h2>Wir sind Livio und Flavio.</h2><p>Basel ist unsere Heimat, und es freut uns besonders, dieses Projekt an solch einer zentralen Stelle verwirklichen zu dürfen. Die Möglichkeit, in unserer Stadt etwas Neues zu gestalten, haben wir mit Sorgfalt und Engagement angepackt.<br/> <br/>

            Das Projekt begann mit einer einfachen Frage: Wie können wir die Clarastrasse aufwerten? Mit diesem Gebäude bieten wir unsere Lösung an und danken allen Baslerinnen und Baslern, die uns dabei unterstützt haben.
            <br/>
            <br />Wir freuen uns auf ein Gebäude, das zum Verweilen einlädt.

             </p></ContentBox>
            <ContentBox justifycontent="flex-start">
              <h2>Kontakt</h2>
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
        <Section id="partner" title="Partner" bgcolor="#000" color="#fff" >
          <Partners />
        </Section>
      </Main>
      </ThemeProvider>
    </>
  )
}

export default IndexPage;


export const Head: React.FC = () => <><title>Clarastrasse 50</title> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link></>