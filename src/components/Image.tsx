import React from 'react';
import styled from 'styled-components';
import Street from '../images/street.png';
import Middle from '../images/middle.png';
import Sky from '../images/sky.png';

const ImageGrid = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 100%;
height: 100%;
`;

const Image = styled.img`
/* max-inline-size: 100%; */
/* block-size: auto; */
/* aspect-ratio: 2/1; */
/* object-fit: cover; */
`;

interface LandingImageProps {
}

export default function LandingImage({  }: LandingImageProps) {

  return (
    <ImageGrid>
        <Image src={Sky} alt="clarastrasse" />
        <Image src={Middle} alt="clarastrasse" />
        <Image src={Street} alt="clarastrasse" />
    </ImageGrid>
          );
        }
