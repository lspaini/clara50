import React from 'react';
import Street from '../images/street.png';
import Middle from '../images/middle.png';
import Sky from '../images/sky.png';
import { Image, ImageGrid } from '../styles/ImageStyles';

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
