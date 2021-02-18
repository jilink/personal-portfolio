import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useColorModeValue } from "@chakra-ui/react"

const Logo = () => {
  const light = useColorModeValue(true, false)
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoLight: file(relativePath: { eq: "logo-light.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (light && data?.logo?.childImageSharp?.fixed) {
    return <Img fadeIn={false} fixed={data.logoLight.childImageSharp.fixed} />
  } else if (data?.logo?.childImageSharp?.fixed) {
    return <Img fadeIn={false} fixed={data.logo.childImageSharp.fixed} />
  }
  return <div>Picture not found</div>
}

export default Logo
