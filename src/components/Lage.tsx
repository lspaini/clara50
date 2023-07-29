import React from 'react';
import { LageContainer, LageTitleLetter } from './Lage.styles';

function Lage() {
    return (
        <LageContainer>
            {Array.from('Lage').map((letter, index) => (
                <LageTitleLetter key={index}>
                    {letter}
                </LageTitleLetter>
            ))}
        </LageContainer>
    );
}

export default Lage;
