import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import TextContainer from '../TextContainer/text';


const intro = [
  'Being a programmer and working with digital products, I often think about the architects' +  "'"  + ' work and the lasting effect they create. It is obviously not so easy to create something that lasts forever in a digital space, as the technology is constantly changing, and the products we develop will be redesigned and rebuilt very soon. But the effect we create for people who use what we brought to this world should last in their heads as something that gives them satisfaction and feels that someone has really put their heart into creating this.'
];

const Value = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "magazin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <TextContainer paragraphs={intro}/>

      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        objectFit="contain"
        objectPosition="top"
        alt="Posters on the floor"
      />
    </>
  )
};

export default Value
