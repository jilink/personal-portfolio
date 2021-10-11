import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Section from './Section'

const Competences = () => {
  const data = useStaticQuery(graphql`
    query {
      Coiffeur: file(relativePath: { eq: "coiffeur-vitrine-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Portfolio: file(relativePath: { eq: "portfolio-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      garticClone: file(relativePath: { eq: "gartic-clone-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      sushiClicker: file(relativePath: { eq: "sushi-clicker-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      kohLanta: file(relativePath: { eq: "koh-lanta-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      Github: file(relativePath: { eq: "github-minimalist.png" }) {
        childImageSharp {
          fixed(width: 700, height: 400, cropFocus: WEST) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log("data", data)
  return (
    <Section id="competences" title="Compétences">
    </Section>
  )
}

export default Competences
