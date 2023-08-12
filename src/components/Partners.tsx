// Partners.tsx
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';


const Grid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem;
  box-sizing: border-box;
  
  @media (min-width: 48rem) {
    gap: 4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Logo = styled(GatsbyImage)`
& img{
  filter: grayscale(100%);
}
`;


const Partners: React.FC = ({ }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {in: ["partner", "svg"]}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
            publicURL
          }
        }
      }
    }
  `);
  return (
      <Grid> 
        {data.allFile.edges.map((edge: any, index: number) => {
          const image = getImage(edge.node);
          const isSVG = edge.node.publicURL.endsWith('.svg');

          return isSVG ? (
            <img key={index} src={edge.node.publicURL} alt={`Partner ${index + 1}`} />
          ) : (
            image ? <Logo key={index} image={image} alt={`Partner ${index + 1}`} style={{ width: '100%' }} /> : null
          );
        })}
      </Grid>
  );
};

export default Partners;