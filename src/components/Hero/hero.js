import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styles from "./hero.module.scss"
import TextContainer from '../TextContainer/text';

const intro = [
  'Hi, happy to see you here in the digital space I\'ve created. I\'m here to tell you about my passion for creating a delightful user experience and building products.\n'
  ,
  'Tools I use: \n' +
  'Javascript (I like experimenting with pure js)\n' +
  'React (Next, Gatsby)\n' +
  'When it comes to css, I like to use css modules and a fan of the style systems. \n' +
  'Recently I discovered sanity cms and I fall in love with their product and the community.\n',
  'When it comes to collaboration with other developers, I try to keep projects, code, documentation clean and understandable. As Robert Cecil Martin said, in the end, we read code much more often than we write it.',
  'Areas of exploration:\n' +
  'Data analytics, creative tech'
];

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "shadow_mari.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={styles.imgWrapper}>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        objectFit="contain"
        objectPosition="top"
        alt="Photo of a silhouette"
      />
      <TextContainer paragraphs={intro}/>
      </div>
  )
};

export default Hero
