// Plant.tsx

import styled from 'styled-components';
import plant1 from '../images/flower_1.png';
import plant2 from '../images/flower_2.png';
import plant3 from '../images/flower_3.png';
import plant4 from '../images/flower_4.png';
import plant5 from '../images/flower_5.png';
import plant6 from '../images/flower_6.png';
import plant7 from '../images/flower_7.png';
import plant8 from '../images/flower_8.png';
import plant9 from '../images/flower_9.png';
import plant10 from '../images/flower_10.png';
import plant11 from '../images/flower_11.png';
import plant12 from '../images/flower_12.png';


export const linePositions = [
    "0%", "5.7%", "13.425%", "21.15%", "28.875%", "36.6%", "44.325%",
    "52.05%", "59.775%", "67.5%", "75.225%", "82.95%", "90.675%"
  ];
  export const plantImages = [
    plant1, plant2, plant3, plant4, plant5, plant6,
    plant7, plant8, plant9, plant10, plant11, plant12
  ];
  

interface PlantProps {
  backgroundImage: string;
  lineIndex: number;
  mirrored?: boolean;
  zIndex?: number;
}


const Plant = styled.div<PlantProps>`
  position: absolute;
  top: 8rem;
  background: url(${props => props.backgroundImage});
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 10%;
  left: ${props => linePositions[props.lineIndex] || "0%"};
  transform: ${props => (props.mirrored ? "scaleX(-1)" : "none")};
`;


export default Plant;
