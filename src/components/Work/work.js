import React from "react"
import styles from "./work.module.scss"
import Img from 'gatsby-image/withIEPolyfill';
import { graphql, useStaticQuery } from 'gatsby';

const projects = [
  {
    name: 'uppercase website',
    link: 'https://uppercase.no/',
    tools: 'React (Gatsby)',
    contributor: 'multiple contributors',
  },
  {
    name: 'coop poster-making tool',
    link: 'http://coop-valget.lowercase.no/',
    tools: 'Canvas, React, VanillaJS',
    contributor: 'single contributor (password on request)',
  },
  {
    name: 'sanity website',
    link: 'https://www.sanity.io/',
    tools: 'React, GROQ, Sanity',
    contributor: 'multiple contributors',
  },
  {
    name: 'women in tech summit website',
    link: 'https://summit2020.witoslo.com/',
    tools: 'VanillaJS',
    contributor: 'single contributor',
  },
  {
    name: 'smart boliganalyse',
    link: 'https://boliganalyse.vendu.no/',
    tools: 'React, Redux',
    contributor: 'multiple contributors',
  },


];

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "shoot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={styles.work}>
      <div className={styles.listWork}>
        <p>selected projects</p>
        {projects.map((project, index) => (
          <div key={index}  className={styles.projectBox}>
            <a href={project.link}>
              0{index + 1} {project.name}
            </a>
            <p>tools: {project.tools} <br/> {project.contributor}</p>
          </div>
        ))}
      </div>
      <div className={styles.imgWrapper}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          objectPosition="50% 50%"
          alt="Photo in the dark"
        />
      </div>
    </div>
  )
};

export default Work
