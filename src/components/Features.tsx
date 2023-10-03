import React from 'react';
import { FeatureContainer, FeatureDescription, FeatureGrid, FeatureIcon, FeatureTitle } from '../styles/FeaturesStyles';


const Features: React.FC = ({ }) => {

  return (
      <FeatureGrid> 
<FeatureContainer>
<FeatureIcon>
          {/* <i className="glyphicon glyphicon-leaf"></i> */}
        </FeatureIcon>
  <FeatureTitle>Nicht nur ein visueller Akzent</FeatureTitle>
  <FeatureDescription>Die Fassadenbegrünung vermittelt den Bewohner:innen Privatsphäre, absorbiert CO2 und verbessert die Luftqualität in der Umgebung.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
          {/* <i className="glyphicon glyphicon-grain"></i> */}
        </FeatureIcon>
  <FeatureTitle>Alle Vögel sind schon da</FeatureTitle>
  <FeatureDescription>Die Fassadenbegrünung und das Gründach, in Kombination mit Nisthilfen, schaffen neuen Lebensraum für Vögel und Insekten.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
          {/* <i className="glyphicon glyphicon-tree-deciduous"></i> */}
        </FeatureIcon>
  <FeatureTitle>Bäume. Auf dem Dach.</FeatureTitle>
  <FeatureDescription>Neuer Wohnraum und mehr Bäume für Basel müssen sich nicht beissen. Wir pflanzen drei bis vier neue Bäume auf das Dach.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-hdd"></i> */}
        </FeatureIcon>
  <FeatureTitle>Das Gebäude: Ein CO2-Speicher</FeatureTitle>
  <FeatureDescription>Dank karbonisiertem Recyclingbeton vom ETH-Spinoff Neustark speichern wir CO2 aus der Atmosphäre permanent im Gebäude.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-cloud"></i> */}
        </FeatureIcon>
  <FeatureTitle>Teil der Schwammstadt</FeatureTitle>
  <FeatureDescription>Das Dach speichert Regenwasser in einer bis zu 35 Zentimeter tiefen Erdschicht und lässt es bei Hitze verdunsten, um die Umgebung zu kühlen.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-fire"></i> */}
        </FeatureIcon>
  <FeatureTitle>Heizen ohne Putin</FeatureTitle>
  <FeatureDescription>Die Erdsonden sorgen für nachhaltige Wärme, ganz ohne die Mithilfe von Diktatoren.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
          {/* <i className="glyphicon glyphicon-ice-lolly"></i> */}
        </FeatureIcon>
  <FeatureTitle>Weniger schwitzen 😅</FeatureTitle>
  <FeatureDescription>Hohe Energieeffizienz, ein Hausautomationssystem und Bodenkühlung durch die Erdsonde machen die Sommerhitze erträglicher.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-refresh"></i> */}
        </FeatureIcon>
  <FeatureTitle>Fenster zu!</FeatureTitle>
  <FeatureDescription>Eine Komfortlüftung sorgt für hohe Energieeffizienz und ein angenehmes Raumklima.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-volume-off"></i> */}
        </FeatureIcon>
  <FeatureTitle>Wild und ruhig</FeatureTitle>
  <FeatureDescription>Erhöhter Schallschutz ermöglicht es dir, dein Leben so zu leben, wie du willst, ohne andere zu stören oder gestört zu werden.</FeatureDescription>
</FeatureContainer>

<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-phone"></i> */}
        </FeatureIcon>
  <FeatureTitle>Schlüssel? Dein Smartphone</FeatureTitle>
  <FeatureDescription>Digitale Schlüssel bieten dir maximale Flexibilität. Vorbei sind die Zeiten, in denen Schlösser und ihre Schlüssel auf Mülldeponien landeten.</FeatureDescription>
</FeatureContainer>
<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-music"></i> */}
        </FeatureIcon>
  <FeatureTitle>Instrumente?</FeatureTitle>
  <FeatureDescription>Herzlich willkommen! Wir haben einen Musikraum im Untergeschoss, der nach Absprache genutzt werden kann.</FeatureDescription>
</FeatureContainer>
<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-arrow-up"></i> */}
        </FeatureIcon>
  <FeatureTitle>Mit gutem Gewissen Lift fahren…</FeatureTitle>
  <FeatureDescription>...aber schlecht für die Fitness: Unser Lift ist in Produktion, Installation, Wartung und Betrieb komplett CO2-neutral.</FeatureDescription>
</FeatureContainer>
<FeatureContainer>
<FeatureIcon>
{/* <i className="glyphicon glyphicon-wrench"></i> */}
        </FeatureIcon>
  <FeatureTitle>Wir sind noch nicht fertig…</FeatureTitle>
  <FeatureDescription>Wir machen keine Versprechungen, die wir nicht einhalten können. Deshalb wird diese Liste laufend erweitert, sobald wir neue Aspekte festgelegt haben. Wir prüfen alle Baumaterialien sorgfältig. Habt ihr Ideen? Meldet euch bei uns!</FeatureDescription>
</FeatureContainer>
      </FeatureGrid>
  );
};

export default Features;