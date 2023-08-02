import React from 'react';
import { SectionContainer, SectionTitleLetter } from './Section.styles';

function Section({ title = 'Section' }) { // Provide a default title, in case none is passed
    return (
        <SectionContainer>
            <div></div> {/* Empty grid cell to offset the letters by one column */}
            {Array.from(title).map((letter, index) => (
                <SectionTitleLetter key={index}>
                    {letter}
                </SectionTitleLetter>
            ))}
        </SectionContainer>
    );
}

export default Section;
